"use client";

import styles from "./chart.module.css";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
    },
    {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
    },
    {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
    },
    {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
    },
    {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
    },
    {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
    },
    {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
    },
];

const Chart = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Weekly Recap</h2>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                        contentStyle={{ background: "#151c2c", border: "none" }}
                    />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="visits"
                        stroke="#8884d8"
                        strokeDasharray="5 5"
                    />
                    <Line
                        type="monotone"
                        dataKey="clicks"
                        stroke="#82ca9d"
                        strokeDasharray="3 4 5 2"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
