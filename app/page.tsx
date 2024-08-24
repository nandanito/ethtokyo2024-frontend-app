'use client';

import Image from 'next/image';
import { Navbar } from './Navbar';
import { ButtonGroup } from '@/components/button-group';
import { BalanceCard } from '@/components/balance-card';

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container flex justify-center mt-20">
        <ButtonGroup />
      </div>

      <div className="container flex justify-evenly">
        <BalanceCard title={'Sender'} balance={0.775} />
        <BalanceCard title={'Receiver'} balance={0.175} />
      </div>
    </>
  );
}
