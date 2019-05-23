using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace backend.Controllers
{
  [EnableCors("MyCors")]
  [Route("api/[controller]")]
  [ApiController]
  public class PartyController : ControllerBase
  {
    private InMemoryDbContext _context;

    public PartyController(InMemoryDbContext context)
    {
      _context = context;
    }

    // GET api/party
    [HttpGet]
    public ActionResult<IEnumerable<Party>> Get()
    {
      // Normally there'd be more robust status code handling
      // We can build a response that includes the relevant character information as well
      var parties = _context.Parties.ToList();

      parties.ForEach(p =>
      {
        p.Characters = _context.Characters.Where(c => c.PartyId == p.Id).ToList();
      });

      return Ok(parties);
    }

    // GET api/party/5
    [HttpGet("{id}")]
    public ActionResult<Party> Get(int id)
    {
      // Normally there'd be more robust status code/error handling
      // EF ought to handle these relationships easier.
      var characters = _context.Characters.Where(c => c.PartyId == id).ToList();
      var party = _context.Parties.First(p => p.Id == id);
      party.Characters = characters;

      return Ok(party);
    }

    // POST: api/party
    [EnableCors("MyCors")]
    [HttpPost]
    public async Task<ActionResult<Party>> PostParty(Party party)
    {
      _context.Parties.Add(party);
      await _context.SaveChangesAsync();

      return Ok(new Models.Party { Id = party.Id, Name = party.Name, Tagline = party.Tagline, LogoUrl = party.LogoUrl, Characters = party.Characters });
    }

    [EnableCors("MyCors")]
    [HttpPut("{id}")]
    public async Task<ActionResult<Party>> PutParty(long id, Party party)
    {
      if (id != party.Id)
      {
        return BadRequest();
      }

      _context.Entry(party).State = EntityState.Modified;
      await _context.SaveChangesAsync();

      return NoContent();
    }

    [EnableCors("MyCors")]
    [HttpDelete("{id}")]
    public async Task<ActionResult<Party>> Delete(long id)
    {
      var deletedItem = _context.Parties.Remove(_context.Parties.FirstOrDefault(p => p.Id == id)).Entity;
      await _context.SaveChangesAsync();
      return Ok(deletedItem);
    }
  }
}
