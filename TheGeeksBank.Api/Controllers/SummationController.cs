using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using TheGeeksBank.Api.Context;
using TheGeeksBank.Api.Interfaces;
using TheGeeksBank.Api.Models;

namespace TheGeeksBank.Api.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class SummationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IFibonacciService _fibonacciSrv;
        private readonly ILogger<SummationController> _logger;

        public SummationController(
            ApplicationDbContext context,
            IFibonacciService fibonacciSrv,
            ILogger<SummationController> logger)
        {
            _context = context;
            _fibonacciSrv = fibonacciSrv;
            _logger = logger;
        }

        [HttpPost("sum")]
        public async Task<ActionResult<Response>> Total([FromBody] Object numbersToSumData)
        {
            Summation numbersToSum = JsonConvert.DeserializeObject<Summation>(numbersToSumData.ToString());
            ulong result = numbersToSum.FirstNumber + numbersToSum.SecondNumber;
            int isExistsNumber = Array.IndexOf(_fibonacciSrv.GetSequence(), result);

            numbersToSum.Result = result;
            _context.Summation.Add(numbersToSum);
            await _context.SaveChangesAsync();

            return Ok(new Response { isFoundSequence = isExistsNumber > 0 ? true : false, result = result });
        }
    }
}