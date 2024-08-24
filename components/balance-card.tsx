import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function BalanceCard(props: { title: string; balance: number }) {
  return (
    <Card className="w-1/3 mt-20">
      <CardHeader className="flex justify-center text-center">
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>Balance</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <h1>{props.balance} ETH </h1>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
