import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { promises as fs } from 'fs';
import Calculator from './ui/calculator';
import { ExpenseRatio } from './lib/definitions';

export default async function Page() {
  const expenseRatiosFile = await fs.readFile(process.cwd() + '/app/lib/expense-ratios.json', 'utf8');
  const expenseRatios: ExpenseRatio[] = JSON.parse(expenseRatiosFile);

  return (
    <main className="flex min-h-screen flex-col p-4 space-y-4 bg-slate-500">
      <div className="flex bg-blue-300">
        <h1 className="text-xl">📊 Budget.nyc</h1>
      </div>
      <div className="flex flex-col w-1/2 self-center space-y-4 bg-slate-300">
        <h1 className="text-3xl">Where are my tax dollars going?</h1>
        <p className="text-xl max-w-prose">Most New Yorkers pay X% of their income to the city. Input the city tax you paid in April 2023, and we'll show you where your money went.</p>
        <Calculator expenseRatios={expenseRatios} />
      </div>
    </main>
  );
}
