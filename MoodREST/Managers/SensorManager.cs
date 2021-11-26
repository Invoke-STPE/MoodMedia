using ModelLib;
using MoodREST.Interfaces;
using MoodREST.MockData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoodREST.Managers
{
    public class SensorManager : ISensorManager
    {
        private static List<SensorData> _dataList;
        private static int _nextId = 1;

        public SensorManager()
        {
            if (_dataList == null) _dataList = MockSensorData.GetMockData().ToList();

            // Find next available id. To be used when adding new data
            foreach (var data in _dataList)
            {
                if (data.Id > _nextId) _nextId = data.Id;
            }
            _nextId++; // should be 1 above highest id found in list
        }

        public SensorManager(IEnumerable<SensorData> sensorDatas)
        {
            _dataList = sensorDatas.ToList();

            // Find next available id. To be used when adding new data
            foreach (var data in _dataList)
            {
                if (data.Id > _nextId) _nextId = data.Id;
            }
            _nextId++; // should be 1 above highest id found in list
        }

        public IEnumerable<SensorData> Get()
        {
            return _dataList;
        }

        public SensorData Get(int id)
        {
            var data = _dataList.FirstOrDefault(sd => sd.Id == id);
            return data ?? throw new KeyNotFoundException($"SensorData with id {id} not found.");
        }

        public bool Create(SensorData data)
        {
            // Get next available id for the new data
            // Any id given previously is overwritten to make sure they're unique
            data.Id = _nextId++;
            _dataList.Add(data);
            return true;
        }
        public bool Update(int id, SensorData data)
        {
            try {

                var dataToUpdate = Get(id);
                dataToUpdate.SensorName = data.SensorName;
                dataToUpdate.Temperature = data.Temperature;
                dataToUpdate.Humidity = data.Humidity;
                dataToUpdate.Pressure = data.Pressure;
                return true;
            }
            catch (KeyNotFoundException knfe)
            {
                throw new KeyNotFoundException(knfe.Message);
            }
        }

        public SensorData Delete(int id)
        {
            try
            {
                var dataToDelete = Get(id);
                _dataList.Remove(dataToDelete);
                return dataToDelete;
            }
            catch (KeyNotFoundException knfe)
            {
                throw new KeyNotFoundException(knfe.Message);
            }
        }

        public SensorData GetLatest()
        {
            return Get().Last();
        }

    }
}
