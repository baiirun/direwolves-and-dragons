using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace backend.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CharacterController : ControllerBase
  {
    private InMemoryDbContext _context;

    public CharacterController(InMemoryDbContext context)
    {
      _context = context;
    }

    // GET api/character
    [HttpGet]
    public ActionResult<IEnumerable<Character>> Get()
    {
      // Normally there'd be more robust status code handling
      return Ok(_context.Characters.ToList());
    }

    // GET api/party/5
    [HttpGet("{id}")]
    public ActionResult<Character> Get(int id)
    {
      // Normally there'd be more robust status code/error handling
      var character = _context.Characters.First(c => c.Id == id);
      return Ok(character);
    }

    // POST: api/party
    [HttpPost]
    public async Task<ActionResult<Character>> PostCharacter(Character character)
    {
      _context.Characters.Add(character);
      // Party party = _context.Parties.FirstOrDefault(p => p.Id == character.PartyId);
      // party.Characters.ToList().Add(character);
      await _context.SaveChangesAsync();

      return Ok(
          new Models.Character
          {
            Id = character.Id,
            Name = character.Name,
            ImageUrl = character.ImageUrl,
            Race = character.Race,
            Class = character.Class,
            Health = character.Health,
            Strength = character.Strength,
            Dexterity = character.Dexterity,
            Constitution = character.Constitution,
            Intelligence = character.Intelligence,
            Wisdom = character.Wisdom,
            Charisma = character.Charisma,
            PartyId = character.PartyId
          });
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<Character>> PutCharacter(long id, Character character)
    {
      if (id != character.Id)
      {
        return BadRequest();
      }

      _context.Entry(character).State = EntityState.Modified;
      await _context.SaveChangesAsync();

      return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<Character>> Delete(long id)
    {
      var deletedItem = _context.Characters.Remove(_context.Characters.FirstOrDefault(p => p.Id == id)).Entity;
      await _context.SaveChangesAsync();
      return Ok(deletedItem);
    }
  }
}
