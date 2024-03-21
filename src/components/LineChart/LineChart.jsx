import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentData = [
        { id: 1, name: 'Alice', math: 85, physics: 78, chemistry: 92 },
        { id: 2, name: 'Bob', math: 72, physics: 65, chemistry: 80 },
        { id: 3, name: 'Charlie', math: 90, physics: 85, chemistry: 88 },
        { id: 4, name: 'David', math: 65, physics: 60, chemistry: 72 },
        { id: 5, name: 'Emma', math: 78, physics: 75, chemistry: 85 },
        { id: 6, name: 'Frank', math: 88, physics: 82, chemistry: 90 },
        { id: 7, name: 'Grace', math: 95, physics: 88, chemistry: 96 },
        { id: 8, name: 'Hannah', math: 70, physics: 68, chemistry: 78 },
        { id: 9, name: 'Ian', math: 82, physics: 75, chemistry: 85 },
        { id: 10, name: 'Jessica', math: 79, physics: 72, chemistry: 83 }
      ];
    return (
        <div>
            <LChart width={800} height={400} data={studentData}>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Line dataKey="math" stroke='red'></Line>
            <Line dataKey="physics" stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;