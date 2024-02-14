using System.ComponentModel.DataAnnotations;

namespace TODO.API.Models
{
    public class Todo
    {
        public int Id { get; set; }
        [Required(ErrorMessage ="Please add Title")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Please add Descriptions")]
        public string Descriptions { get; set; }
        public int IsCompleted { get; set; }
        public DateTime CreatedOn { get; set; }

        public DateTime DueDate { get; set; }
        [Required(ErrorMessage = "Please add Priority")]
        public string Prioritys { get; set; }
       
        
    }
}
