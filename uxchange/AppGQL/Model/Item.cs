using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace uxchange.Models
{

    public class Item
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = null!;

        [Required]
        public string ImageURI { get; set; }

        [Required]
        public string TradeorSell { get; set; } = null!;

        [Required]
        public int Contact { get; set; }

        [Required]
        public int Description { get; set; }

        [Required]
        public int UserId { get; set; }

        public User User { get; set; } = null!;

        public DateTime Modified { get; set; }

        public DateTime Created { get; set; }

        public ICollection<AddItem> AddItem { get; set; } = new List<AddItem>();

    }
}
