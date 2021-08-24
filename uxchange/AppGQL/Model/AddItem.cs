using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace uxchange.Models
{

    public class AddItem
    {

        [Key]
        public int Id { get; set; }

        [Required]
        public string Content { get; set; } = null!;

        [Required]
        public int ItemId { get; set; }

        public Item Item { get; set; } = null!;

        [Required]
        public int UserId { get; set; }

        public User User { get; set; } = null!;

        public DateTime Modified { get; set; }

        public DateTime Created { get; set; }

    }
}
