using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace TaskTracker.WebAPI.Models
{
  public class Task
  {
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
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
