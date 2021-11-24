using ModelLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoodREST.MockData
{
    public class MockSensorData
    {
        public static IEnumerable<SensorData> GetMockData()
        {
            var data = new List<SensorData>() {
                new SensorData(1, "MockSensor 1", 20, 50, 800),
                new SensorData(2, "MockSensor 2", 21, 45, 900),
                new SensorData(3, "MockSensor 1", 21.5, 46.4, 850),
                new SensorData(4, "MockSensor 1", 21, 66, 950),
                new SensorData(5, "MockSensor 2", 22, 55, 1000),
                new SensorData(6, "MockSensor 1", 23, 49, 800),
                new SensorData(7, "MockSensor 2", 28, 51, 900),
            };
            return data;
        }
    }
}
