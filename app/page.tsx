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
    <main className="flex min-h-screen flex-col space-y-8">
      <div className="flex bg-blue-900 p-4">
        <h1 className="text-xl text-white">📊 Budget.nyc</h1>
      </div>
      <div className="flex flex-col w-1/2 self-center space-y-4">
        <h1 className="text-3xl">Where are my tax dollars going?</h1>
        <p className="text-xl max-w-prose">Most New Yorkers pay X% of their income to the city. Input the city tax you paid in April 2023, and we'll show you where your money went.</p>
        <Calculator expenseRatios={expenseRatios} />
      </div>
      <div className="flex self-center pt-16">
        <p className="text-sm text-gray-400">
          Made by <a href="https://github.com/sethfri" className="text-blue-400">Seth Friedman</a>. Code on <a href="https://github.com/sethfri/budget.nyc" className="text-blue-400">GitHub</a>.
        </p>
      </div>
    </main>
  );
}
