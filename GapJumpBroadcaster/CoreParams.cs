using System;

namespace GapJumpBroadcaster
{
    public class CoreParams
    {
        public DateTime Date { get; set; }
        public int TemperatureC { get; set; }
        public int PowerOutputMW { get; set; }
        public string Summary { get; set; }
        public string Location { get; set; }
    }
}