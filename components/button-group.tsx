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

export function ButtonGroup() {
  return (
    <Card className="w-full">
      <CardHeader className="flex justify-center text-center">
        <CardTitle>Flow</CardTitle>
        <CardDescription>Anonymise the transaction</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between mt-10">
        <Button>Provision Token</Button>
        <Button>Deposit</Button>
        <Button>Transfer</Button>
        <Button>Withdraw</Button>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
