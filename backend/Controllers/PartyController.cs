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
            var parties = _context.Parties.ToList();

            parties.ForEach(p =>
            {
                p.Characters = _context.Characters.Where(c => c.PartyId == p.Id);
            });

            return Ok(parties);

        }

        // GET api/party/5
        [HttpGet("{id}")]
        public ActionResult<Party> Get(int id)
        {
            // Normally there'd be more robust status code/error handling
            // EF ought to handle these relationships easier.
            var characters = _context.Characters.Where(c => c.PartyId == id);
            var party = _context.Parties.First(p => p.Id == id);
            party.Characters = characters.ToList();

            return Ok(party);
        }
    }
}
