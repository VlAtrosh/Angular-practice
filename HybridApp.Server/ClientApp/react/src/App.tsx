import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [weather, setWeather] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/weatherforecast')
      .then(res => {
        if (!res.ok) throw new Error('Ошибка сервера')
        return res.json()
      })
      .then(data => {
        setWeather(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <h2 style={{ padding: 20 }}>Загрузка данных с сервера...</h2>
  if (error) return <h2 style={{ padding: 20, color: 'red' }}>Ошибка: {error}</h2>

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Прогноз погоды (React + ASP.NET Core)</h1>
      <table border={1} cellPadding={10} style={{ borderCollapse: 'collapse', marginTop: 20 }}>
        <thead style={{ background: '#f0f0f0' }}>
          <tr>
            <th>Дата</th>
            <th>Температура (°C)</th>
            <th>Описание</th>
            <th>Температура (°F)</th>
          </tr>
        </thead>
        <tbody>
          {weather.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.temperatureC}</td>
              <td>{item.summary}</td>
              <td>{item.temperatureF}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App