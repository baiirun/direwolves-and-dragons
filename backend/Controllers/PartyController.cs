using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PartyController : ControllerBase
    {
        private InMemoryDbContext _context;

        public PartyController(InMemoryDbContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Party>> Get()
        {
            // Normally there'd be more robust status code handling
            // We can build a response that includes the relevant character information as well
            return _context.Parties.ToList();
        }

        // GET api/party/5
        [HttpGet("{id}")]
        public ActionResult<Party> Get(int id)
        {
            // Normally there'd be more robust status code handling
            // We can build a response that includes the relevant character information as well
            return _context.Parties.FirstOrDefault(p => p.Id == id);
        }
    }
}
