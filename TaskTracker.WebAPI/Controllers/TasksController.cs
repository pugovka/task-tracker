using System.Linq;
using System.Net;
using TaskTracker.WebAPI.Models;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace TaskTracker.WebAPI.Controllers
{
    [EnableCors(origins: "http://localhost:8333", headers: "*", methods: "*")]
    public class TasksController : ApiController
    {
       private TaskDBContext db = new TaskDBContext();      

        public HttpResponseMessage Get()
        {
            var tasks = db.Tasks.ToList();
            return Request.CreateResponse(
                HttpStatusCode.OK,
                tasks);
        }
        
        public HttpResponseMessage Post(Task task)
        {
            if (task == null || !ModelState.IsValid)
            {
                return Request.CreateErrorResponse(
                    HttpStatusCode.BadRequest,
                    "Invalid input");
            }
            
            db.Tasks.Add(task);
            db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.Created);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
