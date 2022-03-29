using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheGeeksBank.Api.Models
{
    public class Summation
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "bigint")]
        public ulong FirstNumber { get; set; }

        [Required]
        [Column(TypeName = "bigint")]
        public ulong SecondNumber { get; set; }

        [Required]
        [Column(TypeName = "bigint")]
        public ulong Result { get; set; }
    }
}