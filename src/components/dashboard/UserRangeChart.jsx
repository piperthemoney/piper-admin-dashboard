import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

// const totalUsers = data.reduce((sum, item) => sum + item.value, 0);

export default function Component({chart, total}) {
  console.log("chart", total)

  const data = Object.entries(chart ? chart : []).map(([name, value]) => ({  
    name,  
    value  
  })); 

  const totalUsers = total * 10;

  return (
    <div className="w-full mx-auto bg-zinc-900 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">User Range Based On Lifespan</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Total Piper User Accounts</h3>
        <p className="text-4xl font-bold">{total.toLocaleString()}</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" domain={[0, totalUsers]} stroke="#ffffff" />
          <YAxis dataKey="name" type="category" width={100} height={100} stroke="#ffffff" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#18181b', border: 'none', borderRadius: '0.25rem', padding: '0.5rem' }}
            itemStyle={{ color: '#ffffff' }}
            cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
          />
          <Bar dataKey="value" fill="#06b6d4" barSize={20} >
          <LabelList
              dataKey="value" 
              position="right" 
              fill="#ffffff" 
              formatter={(value) => value.toLocaleString()}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}


import PropTypes from 'prop-types';

Component.propTypes = {
  chart: PropTypes.object,
  total: PropTypes.number.isRequired
};