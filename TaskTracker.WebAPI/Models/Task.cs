using System.ComponentModel.DataAnnotations;
using System.Data.Entity;

namespace TaskTracker.WebAPI.Models
{
    public class Task
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        public string Description { get; set; }
    }

    public class TaskDBContext : DbContext
    {
        public DbSet<Task> Tasks { get; set; }
    }
}