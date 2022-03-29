using TheGeeksBank.Api.Interfaces;

namespace TheGeeksBank.Api.Services
{
    public class FibonacciService : IFibonacciService
    {
        private readonly ulong[] _fibonacciSequence;

        public FibonacciService()
        {
            _fibonacciSequence = new ulong[100];
        }

        private void SetupSequence()
        {
            for (ulong i = 0; i < 100; i++)
            {
                if (i == 0 || i == 1)
                {
                    _fibonacciSequence[i] = i;
                }
                else
                {
                    _fibonacciSequence[i] = _fibonacciSequence[i - 1] + _fibonacciSequence[i - 2];
                }
            }
        }

        public ulong[] GetSequence()
        {
            return _fibonacciSequence;
        }
    }
}