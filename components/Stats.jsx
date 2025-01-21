"use client";
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
    { id: 1, name: 'Sejak 1983', value1: 50, value2: 'Proyek Terselesaikan' },
    { id: 2, name: 'Pengalaman', value1: 42, value2: 'Tahun' },
    { id: 3, name: 'Relasi', value1: 46, value2: 'Mitra Pemerintah' },
    { id: 4, name: 'Jumlah Karyawan', value1: 190, value2: 'Orang' },
];

const Stats = () => {
    return (
        <section className="stats-container">
            <div className="stats-bg">
                <div
                    className="stats-bg-img"
                    style={{
                        backgroundImage: `url('/pattern.jpg')`,
                    }}
                ></div>
                <div className="stats-bg-img-overlay"></div>
            </div>
            <div className="stats-content">
                <dl className="stats-display">
                    {stats.map((stat) => (
                        <StatItem key={stat.id} stat={stat} />
                    ))}
                </dl>
            </div>
        </section>
    );
};

const StatItem = ({ stat }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className="stats-item">
            <div className="stats-value">
                <dd className="stats-value1">
                    {inView ? <CountUp end={stat.value1} duration={2} /> : '0'}+
                </dd>
                <dd className="stats-value2">
                    {stat.value2}
                </dd>
            </div>
            <dt className="stats-name">{stat.name}</dt>
        </div>
    );
};

export default Stats;