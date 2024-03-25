import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ userInput }) {
    const calculatedUserInput = calculateInvestmentResults(userInput);
    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Amount</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {calculatedUserInput.map((result) => <tr key={result.year}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(result.totalInterest)}</td>
                <td>{formatter.format(result.valueEndOfYear - result.totalInterest)}</td>
            </tr>)}
        </tbody>
    </table>
}