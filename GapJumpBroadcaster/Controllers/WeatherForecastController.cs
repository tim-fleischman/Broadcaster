using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GapJumpBroadcaster.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private static readonly string[] Locations = new[]
        {
            "London", "Ipswich", "Dubai", "Cape Town", "Dunedin", "Dublin", "Paris", "Hamburg", "Tokyo", "San Francisco"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.Date.AddDays(index),
                TemperatureC = rng.Next(-20, 38),
                Summary = Summaries[rng.Next(Summaries.Length)],
                Location = Locations[rng.Next(Locations.Length)]
            })
            .ToArray();
        }
    }
    public class CoreParametersController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Nominal", "High", "Low", "Nominal", "Nominal"
        };

        private static readonly string[] Locations = new[]
        {
            "Reactor 1", "Reactor 2", "Reactor 3", "Reactor 4"
        };

        private readonly ILogger<CoreParametersController> _logger;

        public CoreParametersController(ILogger<CoreParametersController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<CoreParams> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new CoreParams
            {
                Date = DateTime.Now.AddSeconds(index),
                TemperatureC = rng.Next(280, 320),
                PowerOutputMW = rng.Next(400, 650),
                Summary = Summaries[rng.Next(Summaries.Length)],
                Location = Locations[rng.Next(Locations.Length)]
            })
            .ToArray();
        }
    }
}
