document.addEventListener('DOMContentLoaded', function () {
    // Function to calculate inflated price of goal
    function calculateInflatedPrice(currentPrice, yearsRemaining) {
        // Assuming an average inflation rate of 6% per year
        const inflationRate = 0.06;
        const inflatedPrice = currentPrice * Math.pow(1 + inflationRate, yearsRemaining);
        return inflatedPrice.toFixed(2); // Limiting to 2 decimal places
    }

    // Function to calculate CAGR
    function calculateCAGR(initialValue, finalValue, years) {
        return Math.pow(finalValue / initialValue, 1 / years) - 1;
    }

    // Function to update HTML element with inflated price
    function updateInflatedPrice(price) {
        const inflatedPriceElement = document.getElementById('inflatedPrice');
        inflatedPriceElement.textContent = price;
    }
    function updateHTMLWithFundData(fundData) {
        const fundListElement = document.getElementById('fundList');
    
        // Clear previous fund data if any
        fundListElement.innerHTML = '';
    
        // Create a table element
        const table = document.createElement('table');
        table.classList.add('styled-table'); // Add a class for styling
    
        // Create table header
        const headerRow = document.createElement('tr');
        const headers = ['Name', 'Category', 'SubCategory', 'Plan', 'CAGR', 'Expense Ratio'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);
    
        // Iterate through the fund data and create table rows
        fundData.forEach(fund => {
            const row = document.createElement('tr');
            // Append Name first
            const nameCell = document.createElement('td');
            nameCell.textContent = fund.Name;
            row.appendChild(nameCell);
            // Append other fields
            ['Category', 'SubCategory', 'Plan', 'CAGR', 'ExpenseRatio'].forEach(fieldName => {
                const cell = document.createElement('td');
                cell.textContent = fund[fieldName];
                row.appendChild(cell);
            });
            table.appendChild(row);
        });
    
        // Append the table to the fundListElement
        fundListElement.appendChild(table);
    }
    

    // Function to update HTML element with CAGR
    function updateCAGR(cagr) {
        const cagrElement = document.getElementById('cagr');
        cagrElement.textContent = (cagr * 100).toFixed(2) + "%";
    }

    // Function to update HTML element with amount to invest
    function updateAmountToInvest(amount) {
        const amountToInvestElement = document.getElementById('amountToInvest');
        amountToInvestElement.textContent = amount.toFixed(2);
    }

    // Function to update HTML element with monthly SIP amount
    function updateMonthlySIP(sipAmount) {
        const sipAmountElement = document.getElementById('sipMessage');
        sipAmountElement.textContent = sipAmount.toFixed(2);
    }

    // Function to calculate SIP amount needed to achieve goal with user-defined interest rate
    function calculateSIPAmount(inflatedPrice, yearsRemaining, investmentType) {
        let interestRate;
        switch (investmentType) {
            case 'Debt':
                interestRate = 0.07;
                break;
            case 'Equity':
                interestRate = 0.22;
                break;
            case 'Hybrid':
                interestRate = 0.16;
                break;
            case 'Index':
                interestRate = 0.17;
                break;
            default:
                interestRate = 0.1; // Default interest rate if no type is selected
        }


        // Convert interest rate from annual to monthly
        const monthlyInterestRate = interestRate / 12;

        // Convert years to months
        const months = yearsRemaining * 12;

        // Calculate SIP amount using formula for future value of annuity
        const sipAmount = inflatedPrice * (monthlyInterestRate) / (Math.pow(1 + (monthlyInterestRate), months) - 1);

        return sipAmount;
    }

    // Get the form elements
    const emergency = document.getElementById('emergency-form');
    const currentPriceInput = document.getElementById('currentPrice');
    const yearsRemainingInput = document.getElementById('yearsRemaining');
    const investmentTypeInput = document.getElementById('investmentType');

    // Add event listener to form submission
    emergency.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get the current price, years remaining, and investment type from form inputs
        const currentPrice = parseFloat(currentPriceInput.value);
        const yearsRemaining = parseInt(yearsRemainingInput.value);
        const investmentType = investmentTypeInput.value;

        // Calculate inflated price of goal
        const inflatedPrice = calculateInflatedPrice(currentPrice, yearsRemaining);

        // Update HTML element with inflated price
        updateInflatedPrice(inflatedPrice);

        // Fetch the amount to invest from the server
        fetch('/getAmountInvested')
            .then(response => response.json())
            .then(data => {
                // Check if amount to invest is available in the response
                if (data.amountToInvest !== null) {
                    // Update the HTML element with amount to invest
                    updateAmountToInvest(data.amountToInvest);
                    fetch(`/fund?investmentType=${investmentType}`)
                    .then(response => response.json())
                    .then(data => {
                        // Update HTML elements with fund data
                        const fundData = data.filteredFunds;
                        updateHTMLWithFundData(fundData);
                    })
                    .catch(error => {
                        console.error('Error fetching fund data:', error);
                    });
                    // Calculate SIP amount needed to achieve goal with user-defined interest rate
                    const sipAmount = calculateSIPAmount(inflatedPrice, yearsRemaining, investmentType);

                    // Update HTML element with monthly SIP amount
                    updateMonthlySIP(sipAmount);

                    // Calculate CAGR based on total investment amount
                    if (data.amountToInvest < sipAmount) {
                        // Calculate the additional amount that the user can invest
                        const additionalAmountToInvest = sipAmount- data.amountToInvest ;
                    
                        // Display a message indicating the required SIP amount and additional investable amount
                        const requiredSIPMessage = document.getElementById('requiredSIPMessage');
                        requiredSIPMessage.textContent = `Your required SIP amount is ${sipAmount.toFixed(2)}. You can invest an additional amount of ${additionalAmountToInvest.toFixed(2)}. 
                        Your current capacity to invest is ${data.amountToInvest.toFixed(2)}. As you have to accomplish your goal, either reduce your expenses or clear the loan amount if any.`;
                        requiredSIPMessage.classList.remove('hidden');
                    }
                    else {
                        // Calculate CAGR based on total investment amount
                        const totalInvestment = sipAmount * yearsRemaining * 12;
                        const cagr = calculateCAGR(totalInvestment, inflatedPrice, yearsRemaining);
                    
                        // Update HTML element with CAGR
                        updateCAGR(cagr);
                    
                        // Optionally, you can also display a confirmation message
                        const confirmationMessage = document.getElementById('confirmation-message');
                        confirmationMessage.classList.remove('hidden');
                    }
                    // Calculate CAGR based on total investment amount 
      }  })
            .catch(error => {
                console.error('Error fetching amount to invest:', error);
            });
    });
});
