# SP5 Master Revision & Question Bank
## IAI/IFoA Subject SP5: Investment and Finance Strategy

### Table of Contents
1. [How to Pass SP5: The Six Habits of Highly Effective Students](#how-to-pass-sp5)
2. [Actuarial Frameworks for Investment Strategy](#actuarial-frameworks)
3. [Chapter 1: Derivatives & Hedging (Q1 – Q32)](#chapter-1)
4. [Chapter 2: Portfolio Theory & ALM (Q33 – Q61)](#chapter-2)
5. [Chapter 3: Risk Management (Q62 – Q72)](#chapter-3)
6. [Chapter 4: Behavioural Finance & ESG (Q73 – Q78)](#chapter-4)
7. [Chapter 5: Taxation & Regulation (Q79 – Q83)](#chapter-5)
8. [Chapter 6: Performance Measurement (Q84 – Q98)](#chapter-6)

---

<a name="how-to-pass-sp5"></a>
### How to Pass SP5: The Six Habits of Highly Effective Students
To secure full marks in SP5, students must transition from "rote learning" to "strategic application." Based on the ActEd guide, here are the core habits:

1.  **Habit 1: Master the Core Reading Early**
    Don't just read; summarize. Create "Flashcards" for definitions of complex instruments like Swaptions, Credit Default Swaps, and exotic options.
2.  **Habit 2: Practice Under Exam Conditions**
    Subject SP5 is time-pressured (1.8 minutes per mark). Practice writing out full bullet points rather than just "noting" the answer.
3.  **Habit 3: Think Like a Consultant**
    Examiners look for the "Why." If you recommend a hedge, explain the *impact* on the solvency ratio and the *risk* of the hedge failing (e.g., basis risk).
4.  **Habit 4: Use Mnemonics Proactively**
    Apply **SOUNDER TRACTORS** or **NTCC** to every "Design a Strategy" question to ensure breadth of coverage.
5.  **Habit 5: Integrate ESG and Behavioural Finance**
    The modern SP5 syllabus gives significant weight to ESG. Always consider "Social Responsibility" and "Climate Risk" alongside financial returns.
6.  **Habit 6: Analysis of Past Papers (IAI & IFoA)**
    Patterns emerge in how the Board of Examiners tests certain areas. This Master Bank covers 98 questions to expose you to those patterns.

---

<a name="actuarial-frameworks"></a>
### Actuarial Frameworks for Investment Strategy

#### **SOUNDER TRACTORS** (Factors Affecting Investment Policy)
*   **S**: **Size** of assets and liabilities relative to the market.
*   **O**: **Overall** objectives (Return vs. Risk).
*   **U**: **Uncertainty** of liability outgo (Amount and Timing).
*   **N**: **Nature** of liabilities (Real vs. Fixed).
*   **D**: **Diversification** requirements.
*   **E**: **Expenses** and management costs.
*   **R**: **Restriction** on investments (Legal or Internal).
*   **T**: **Taxation** (Capital Gains vs. Income Tax).
*   **R**: **Risk** appetite of the stakeholders.
*   **A**: **Accounting** standards (IFRS 9/17).
*   **C**: **Competitors'** actions and industry benchmarks.
*   **T**: **Term** of the liabilities.
*   **O**: **Other** factors (e.g., ESG, Currency).
*   **R**: **Reputation** risk.
*   **S**: **Solvency** capital requirements (RBC).

#### **NTCC** (Matching Liabilities)
*   **N**: **Nature** (matching real liabilities with real assets).
*   **T**: **Term** (matching duration).
*   **C**: **Currency** (matching the currency of outgo).
*   **C**: **Certainty** (matching the probability of payment).

---

<a name="chapter-1"></a>
## Chapter 1 – Derivatives & Hedging

### Question 1 | Exam Term: Dec 22 | Original Q.3
**Question:**
You are a non-executive director on the remuneration committee of Sporting Inc. The executives’ earnings include share options linked with sales volumes. You have been approached to consider other options for incentives, such as bonuses related to profits or risk-adjusted return on capital (RAROC). Explain how you would consider these options and make changes if necessary. [10]

**Full Model Solution:**
*   **Assessment of Current Scheme (Share Options):**
    *   *Advantages:* Aligns executive interests with shareholders (growth focus).
    *   *Disadvantages:* Linking to *sales volume* alone may encourage aggressive growth without regard for profitability or risk. This is a common agency problem.
    *   *Risk:* It might lead to "over-trading" or taking on high-risk projects just to boost top-line numbers.
*   **Evaluation of Profit-Related Bonuses:**
    *   *Advantages:* Focuses on bottom-line results.
    *   *Disadvantages:* Can be manipulated by accounting choices (accruals). Encourages short-termism at the expense of long-term investment (R&D).
*   **Evaluation of RAROC (Risk-Adjusted Return on Capital):**
    *   *Why it fits:* It is the most actuarially sound metric. It ensures that executives are only rewarded if the returns they generate exceed the risk-weighted cost of capital.
    *   *Impact:* Discourages "gambling" with company assets and promotes sustainable shareholder value.
*   **Recommended Changes:**
    *   Move towards a "Balanced Scorecard" approach.
    *   Replace sales-linked options with a mix of RAROC-linked bonuses and long-term vestings.
    *   Introduce "Clawback" provisions to mitigate moral hazard.

**ActEd Exam Hint:**
In remuneration questions, always mention **Agency Theory** and **Moral Hazard**. The examiner wants to see that you understand that incentives drive behavior, often in unintended ways.

**Mnemonics/Frameworks Applied:**
*   **POMS**: Consider the **Objectives** of the stakeholders (shareholders want long-term value, executives want a high payout).

---

### Question 2 | Exam Term: Dec 22 | Original Q.6
**Question:**
XYZ Insurance is launching a single premium pension product (immediate annuity) increasing at 3% p.a. Assets are index-linked Gov securities and corporate bonds. 
i) Comment on interest rate risk exposure. (4)
ii) Discuss the use of swaps to hedge the payments. (3)
iii) Express how you would model the asset-liability mismatch reserve. (7)

**Full Model Solution:**
*   **i) Interest Rate Risk Exposure:**
    *   The liabilities are long-term (annuity for life) with a 3% guaranteed increase.
    *   Index-linked bonds match inflation-linked liabilities, but here the increase is *fixed* (3%), not inflation-linked.
    *   Therefore, there is a **mismatch**. If interest rates fall, the value of the fixed 3% liability increases more than the assets.
    *   Reinvestment risk exists if the corporate bond coupons cannot be reinvested at the assumed 3% target.
*   **ii) Use of Swaps:**
    *   An **Interest Rate Swap (IRS)** could be used where XYZ pays a floating rate and receives a fixed 3% (or equivalent) to match the guaranteed increase.
    *   This converts floating-rate asset income into fixed-rate liability matching.
    *   *Benefit:* Reduces volatility in the solvency ratio.
*   **iii) Modeling the ALM Reserve:**
    *   Use a **Stochastic Model** (e.g., Monte Carlo simulations).
    *   Project cash flows for both assets and liabilities under 1,000+ scenarios of yield curve shifts.
    *   Calculate the Net Present Value (NPV) for each scenario: $NPV = PV(Assets) - PV(Liabilities)$.
    *   The reserve should be set at a specific percentile (e.g., Value at Risk at 99.5% level over 1 year, consistent with Solvency II/RBC).
    *   Include a "Market Value Margin" for non-hedgeable risks (longevity).

**ActEd Exam Hint:**
For annuity questions, always check if the increase is *fixed* or *inflation-linked*. Matching a fixed increase with index-linked bonds is a common trap.

**Mnemonics/Frameworks Applied:**
*   **NTCC**: The **Nature** of the liability is fixed-increase (non-inflation), but the **Certainty** is affected by longevity risk.

---

### Question 3 | Exam Term: Jul 22 | Original Q.1
**Question:**
Consider a 10-year Interest Rate Swap (IRS) based on 100M principal. Co A makes fixed payments; Co B/C/D makes floating payments (IBOR).
i) Should Co A swap with B, C, or D? Justify. (4)
ii) Define credit risk and control methods. (2)
iii) Discuss credit risk exposure changes for the fixed rate receiver when the yield curve is downward sloping. (3)
iv) Define: Opportunity set, efficient frontier, indifference curves, optimum portfolio. (4)

**Full Model Solution:**
*   **i) Choice of Counterparty:**
    *   Co A should look for **Comparative Advantage**.
    *   Compare the spreads between fixed and floating for all parties.
    *   Select the counterparty that generates the highest "Net Gain" (Total Savings minus the 5bps bank fee).
    *   *Calculation logic:* Sum of best rates available to each separately vs. sum of rates in the swap.
*   **ii) Credit Risk Management:**
    *   *Definition:* The risk that the counterparty fails to make payments.
    *   *Controls:* 1. **Collateral Management** (CSA agreements). 2. **Netting** (ISDA Master Agreement).
*   **iii) Credit Risk in Downward Sloping Yield Curve:**
    *   In a downward sloping curve, future expected floating rates (IBOR) are lower than current rates.
    *   For the fixed-rate *receiver*, the swap has a positive mark-to-market value (asset).
    *   As time passes, if rates follow the curve, the "replacement cost" increases, hence credit exposure *rises* initially before the "amortization effect" takes over near maturity.
*   **iv) Portfolio Theory Definitions:**
    *   **Opportunity Set:** The set of all possible combinations of risky assets.
    *   **Efficient Frontier:** The subset of the opportunity set that provides the maximum return for a given level of risk.
    *   **Indifference Curves:** Curves representing the risk-return trade-off for a specific investor; all points on a curve provide equal utility.
    *   **Optimum Portfolio:** The point where the investor's highest indifference curve is tangent to the Efficient Frontier.

**ActEd Exam Hint:**
When discussing yield curves and swaps, use the term **Expected Future Spot Rates**.

---

### Question 4 | Exam Term: Jul 22 | Original Q.2
**Question:**
ABC Ltd (non-dividend paying, price 1000). Strategies A, B, and C involve buying/selling various calls.
i) When does Strategy A make sense? (3)
ii) When does Strategy B make sense? (6)
iii) Identify Strategy C and state trader's view. (2)
iv) Adjustments required for Strategy C if bad news hits and price falls to 980. (2)

**Full Model Solution:**
*   **i) Strategy A (Buy 1050 Call, Sell 1000 Call):**
    *   This is a **Bear Call Spread**.
    *   *Logic:* It makes sense when the trader expects the share price to *fall* or stay below 1000. 
    *   The trader collects a net premium (income) and has limited downside if the price stays low.
*   **ii) Strategy B (Buy 1000 Call 2-month, Sell 1000 Call 1-month):**
    *   This is a **Calendar Spread (horizontal spread)**.
    *   *Logic:* Makes sense if the market is expected to be stable in the short term (decay of the short 1-month option) but volatile in the second month.
    *   Maximum profit occurs if the stock price is at the strike (1000) at the first expiration.
*   **iii) Strategy C (Complex Position):**
    *   This is a **Butterfly Spread** or a variation of a **Ratio Spread** depending on the specific quantities.
    *   *Trader's View:* Neutral. They expect the price to stay within a tight range around the middle strike price.
*   **iv) Adjustments (Price falls to 980):**
    *   If bad news hits, the delta of the position changes.
    *   To maintain the hedge or profit from the new direction, the trader would need to **Buy Put Options** or **Sell more Calls** to become "Delta Negative."
    *   Specifically, they might close the 1050 leg and open lower strike positions.

**Mnemonics/Frameworks Applied:**
*   **Risk Mitigation**: Constant monitoring of "Greeks" ($\Delta, \gamma, \nu, \theta$).

---

---

### Question 5 | Exam Term: Jul 22 | Original Q.3
**Question:**
In a developing country ABC, life insurers are launching IPOs. 
i) Discuss challenges in valuing life insurance companies using fundamental analysis (P/E ratio) vs other industries. (4)
ii) Suggest ways to value life insurance companies and key metrics for comparison. (5)
iii) Mention ways to control inflation besides interest rates. (4)
iv) Suggest ways to reduce net carbon emissions (ESG) at individual and government levels. (6)
v) Identify behavioural finance traits in five specific cases (Mutual fund investing, Full moon trading, Analyst following, Recency bias in gainers, Rising gold prices). (5)

**Full Model Solution:**
*   **i) Challenges in Valuation (Life vs. Other Industries):**
    *   *Long-term Nature:* Unlike retail or tech, life insurance profits are realized over decades. A single year's "Earnings" (P/E) is heavily dependent on actuarial assumptions (mortality, discount rates).
    *   *Prudence:* Accounting profits are often distorted by statutory prudence requirements.
    *   *LTC:* The "Cost of Capital" and "Solvency Requirements" are much more complex and affect the cash available to shareholders.
*   **ii) Alternative Valuation Methods & Metrics:**
    *   **Embedded Value (EV):** The present value of future profits from existing business plus adjusted net worth. This is the industry standard.
    *   **Value of New Business (VNB):** Measures the profitability of new policies sold in the year.
    *   **Metrics for Comparison:** 1. **VNB Margin** (VNB/APE). 2. **Persistency Ratio** (Customer retention). 3. **Solvency Ratio** (Capital strength).
*   **iii) Controlling Inflation (Non-Interest Rate Methods):**
    *   **Fiscal Policy:** Increase taxes or reduce government spending to reduce aggregate demand.
    *   **Supply-Side Policies:** Improvements in productivity or infrastructure to reduce production costs.
    *   **Direct Controls:** Price and wage controls (though often ineffective long-term).
    *   **Exchange Rate Policy:** Strengthening the local currency to reduce the cost of imports.
*   **iv) Reducing Carbon Emissions (ESG):**
    *   *Individual Level:* 1. Shift to electric vehicles. 2. Adoption of renewable energy (solar). 3. Reduced meat consumption.
    *   *Government Level:* 1. Carbon Taxes. 2. Subsidies for Green Tech. 3. "Net Zero" legislation and reporting requirements (TCFD).
*   **v) Behavioural Finance Identification:**
    *   a) **Herding**: Investing because "Top funds" are doing it.
    *   b) **Superstition / Magical Thinking**: Linking market moves to the lunar cycle.
    *   c) **Authority Bias**: Blindly following a "famous analyst."
    *   d) **Availability / Recency Bias**: Buying stocks just because they appeared frequently in recent news/gainer lists.
    *   e) **Momentum / Extrapolation**: Buying gold because prices are currently rising, assuming the trend continues.

**ActEd Exam Hint:**
For life insurance valuation questions, the "Gold Standard" answer must include **Embedded Value (EV)**. If you don't mention EV, you lose the easy marks.

---

### Question 6 | Exam Term: Mar 19 | Original Q.3
**Question:**
A retired, risk-averse accountant with a 4-year horizon considers: Corporate Bonds (CBs), Fixed Deposits (FDs), and Fixed Maturity Plans (FMPs).
i) Discuss the approach to credit rating of the two companies by rating agencies. (10)
ii) Discuss key features and differences between CBs, FDs, and FMPs. (3)
iii) Suggest the most suitable investment. (5)
iv) What are potential reasons for withheld FMP payments? (3)

**Full Model Solution:**
*   **i) Credit Rating Approach:**
    *   The agency looks at **Business Risk** (Industry position, competitive advantage) and **Financial Risk** (Gearing, Interest coverage, Liquidity).
    *   For CB1 (FMCG): They look at brand loyalty, defensive nature of the sector, and cash flow stability.
    *   For CB2 (Cement): They look at the cyclicality of the construction sector and capital intensity.
    *   *Specifics:* Analysis of management quality, governance, and the "Ability vs. Willingness" to pay.
*   **ii) Key Differences:**
    *   **FDs:** Safest, usually insured up to a limit, fixed return, liquid (with penalty).
    *   **CBs:** Listed on exchange, tradable (liquid), but subject to market price risk and credit risk.
    *   **FMPs:** Tax-efficient (indexation benefit), close-ended (low liquidity), credit risk depends on the underlying portfolio.
*   **iii) Suitability Recommendation:**
    *   For a risk-averse investor, **Fixed Deposits** or **FMP (AAA-rated)** are best.
    *   If the FMP offers indexation (as per the table's indexation at 4% p.a.), the **After-Tax Return** on the FMP will likely be higher than the FD or CB1, making it the "Efficient" choice for a sophisticated risk-averse investor.
*   **iv) Withheld Payments in FMPs:**
    *   Usually due to **Liquidity Crisis** or "Side-Pocketing" of bad debt in the underlying portfolio (e.g., defaults in infrastructure sectors).
    *   The fund manager cannot sell the illiquid/defaulted paper and thus freezes redemptions to protect remaining investors.

**Mnemonics/Frameworks Applied:**
*   **SOUNDER TRACTORS**: Specifically **T** (Taxation) and **R** (Risk) drive the choice here.

---

### Question 7 | Exam Term: Mar 19 | Original Q.4
**Question:**
A trader takes a short position in a 1-month equity future after a regulatory warning. The price falls initially but then recovers to 1% above the short level.
i) Use Behavioral Finance to explain why the trader holds the losing position. (3)
ii) Discuss steps to mitigate losses for a continued short hold. (4)

**Full Model Solution:**
*   **i) Behavioral Explanation:**
    *   **Loss Aversion:** The pain of realizing a loss is greater than the joy of a similar gain. The trader holds on hoping for a "break-even."
    *   **Disposition Effect:** The tendency to "cut winners" and "ride losers."
    *   **Cognitive Dissonance:** Ignoring the news that the market has recovered and sticking to the original "Regulation is bad" thesis.
*   **ii) Loss Mitigation:**
    *   **Stop-Loss Orders:** Set a hard exit point to prevent total capital wipeout.
    *   **Hedging with Options:** Buy an "Out-of-the-Money" (OTM) Call option. If the price spikes further, the call gain offsets the future loss (creating a synthetic put).
    *   **Position Sizing:** Reduce the lot size to lower the emotional and financial impact.

---

### Question 8 | Exam Term: Mar 19 | Original Q.5
**Question:**
i) Describe: a) FTSE 100, b) VIX, c) Markit iTraxx Europe. (9)
ii) Discuss using Local vs. Global indices for emerging market research. (6)

**Full Model Solution:**
*   **i) Index Descriptions:**
    *   **FTSE 100:** Market-cap weighted index of the 100 largest companies on the LSE. Highly representative of the UK economy and global sectors (mining, banking).
    *   **VIX:** "The Fear Gauge." Measures the market's expectation of 30-day volatility based on S&P 500 option prices.
    *   **iTraxx Europe:** A CDS index representing a basket of 125 investment-grade European corporate entities. Used to hedge or speculate on credit spreads.
*   **ii) Local vs. Global Indices:**
    *   **Local Indices:** Capture domestic nuances but may lack liquidity or standardized reporting. Better for "Niche" strategies.
    *   **Global Series (MSCI, FTSE Russell):** Provide **Investability Guards** (ensure foreigners can buy), consistency in valuation, and allow for easier cross-country comparison.
    *   *Recommendation:* Use Global indices for strategic allocation and Local indices for the final tactical stock selection.

---

### Question 9 | Exam Term: Mar 21 | Original Q.4
**Question:**
Interest rates: India (5%), UK (2%). Spot rate: 90 INR/GBP.
i) Calculate 1-year forward rate. (1)
ii) Arbitrage profit if forward is 85. (3)
iii) Arbitrage profit if forward is 95. (3)
iv) Calculate value of a 4-year currency swap (Co XYZ receives 6% INR, pays 3% GBP). (5)
v) Discuss currency hedging using forwards. (5)

**Full Model Solution:**
*   **i) Forward Rate Calculation:**
    *   Using Interest Rate Parity (IRP): $F = S \times e^{(r_{INR} - r_{GBP})t}$
    *   $F = 90 \times e^{(0.05 - 0.02) \times 1} \approx 90 \times 1.03045 = 92.74 \text{ INR/GBP}$.
*   **ii) Arbitrage (Forward = 85):**
    *   Forward is "Underpriced" compared to parity.
    *   *Strategy:* Borrow GBP at 2%, convert to INR at 90, invest in India at 5%. Simultaneously buy GBP forward at 85 to "lock in" the exit.
    *   *Profit:* At t=1, you have $90e^{0.05}$ INR. You need $e^{0.02}$ GBP to repay debt. Converting INR to GBP at 85 gives you more than enough to repay.
*   **iii) Arbitrage (Forward = 95):**
    *   Opposite of above. Borrow INR, invest in GBP, sell GBP forward at 95.
*   **iv) Currency Swap Valuation:**
    *   Calculate the value of two bonds: $V_{swap} = P_{INR} - S \times P_{GBP}$.
    *   $P_{INR}$ is the value of an INR bond paying 6% coupons.
    *   $P_{GBP}$ is the value of a GBP bond paying 3% coupons.
    *   Discount all cash flows at the respective continuous rates (5% and 2%).
*   **v) Currency Hedging with Forwards:**
    *   *Advantages:* No upfront cost (unlike options), provides certainty, eliminates downside.
    *   *Disadvantages:* Obligatory (cannot benefit from favorable moves), creates "Opportunity Cost."

**ActEd Exam Hint:**
In currency questions, always specify if you are quoting **Direct** or **Indirect**. Use the formula $F/S = (1+r_d)/(1+r_f)$ for discrete or $e^{(r_d-r_f)}$ for continuous.

---

### Question 10 | Exam Term: Mar 22 | Original Q.3
**Question:**
A bond fund manager expects a significant cash inflow.
i) How to protect against volatility in bond yields? (3)
ii) Describe residual risks. (4)
iii) Alternative reasons to hedge. (2)

**Full Model Solution:**
*   **i) Protection Strategy:**
    *   The manager is worried about **falling yields** (rising bond prices) before they can invest the cash.
    *   *Strategy:* Buy **Bond Futures** or **Interest Rate Swaps** (pay floating, receive fixed). This "locks in" the current high yields.
    *   When the cash arrives, they buy physical bonds and close the future position.
*   **ii) Residual Risks:**
    *   **Basis Risk:** The yields on the futures/swaps may move differently than the specific bonds the manager intended to buy.
    *   **Duration Mismatch:** If the hedge duration doesn't perfectly match the target bond duration.
    *   **Cash Flow Timing:** If the inflow happens earlier or later than expected.
*   **iii) Alternative Hedging Reasons:**
    *   To adjust the portfolio's **Duration** without selling physical bonds (reducing transaction costs).
    *   To meet a specific **ALM** target mandated by the client.

---

### Question 11 | Exam Term: Mar 22 | Original Q.4
**Question:**
An investor considers switching between Treasury 6% (Price 122.5, GRY 1.35%) and Treasury 5.5% (Price 118.3, GRY 1.41%).
i) Describe the switch type and investigations. (5)
ii) Advantages/Disadvantages of technical analysis. (4)
iii) Why might performance of two portfolios by same manager differ? (4)
iv) Performance metrics calculation (Actual vs Benchmark). (9)

**Full Model Solution:**
*   **i) Bond Switch:**
    *   This is a **Yield-Pick-Up Switch** (moving from 1.35% to 1.41%). It could also be a **Policy Switch** if the duration profiles are different.
    *   *Investigations:* 1. Relative liquidity. 2. Accrued interest and transaction costs. 3. Tax implications (is the capital gain/income split different?). 4. Expected future yield curve shifts.
*   **ii) Technical Analysis:**
    *   *Pros:* Captures market psychology and trends; objective (based on data); good for short-term timing.
    *   *Cons:* "Past performance is no guarantee"; can give false signals in choppy markets; ignores fundamental value.
*   **iii) Performance Differences (Same Manager):**
    *   **Different Mandates:** One might have tighter risk constraints.
    *   **Cash Flow Timing:** Impact of "Market Timing" on the specific dates cash entered/left.
    *   **Universe Restrictions:** Different clients might ban certain sectors (ESG/Tobacco).
*   **iv) Return Calculations:**
    *   **Time-Weighted Return (TWR):** Sub-divide the year into periods where cash flows occurred. Neutralizes manager's influence on cash flow timing. $\text{TWR} = (1+r_1)(1+r_2)... - 1$.

**ActEd Exam Hint:**
In performance attribution, distinguish between **Allocation Effect** (being in the right asset class) and **Selection Effect** (choosing the right stocks).

---

### Question 12 | Exam Term: Mar 22 | Original Q.6
**Question:**
Hedge fund income product (OTM Puts/Covered Calls).
i) Why might institutional investors avoid hedge funds? (2)
ii) Discuss possible regulations on operational aspects. (5)
iii) Financial/Investment risks. (10)

**Full Model Solution:**
*   **i) Institutional Disinterest:**
    *   **High Fees:** The "2 and 20" structure is often considered excessive.
    *   **Lack of Transparency:** Many hedge funds are "black boxes."
    *   **Illiquidity:** Lock-in periods don't suit funds with frequent outgo.
*   **ii) Operational Regulation:**
    *   **Reporting:** Mandatory disclosure of leverage and counterparty exposure.
    *   **Capital Requirements:** Ensuring the fund has enough skin in the game.
    *   **Separation of Duties:** Independent custodians and third-party auditors.
*   **iii) Risks of Option-Selling Strategy:**
    *   **Gamma Risk:** A sharp move against the position requires rapid rebalancing which may be impossible in illiquid markets.
    *   **Counterparty Risk:** If the option exchange or clearinghouse fails.
    *   **Capped Upside:** Covered calls limit the gain in a bull market while leaving downside open.

---

### Question 13 | Exam Term: Mar 22 | Original Q.7
**Question:**
Trader shorts equity index future and buys call on ZCB.
i) Role of margin in futures. (3)
ii) Variation margin calculation. (2)
iii) Forward price vs yield volatility. (1)
iv) Interest rate risk in developed vs developing bonds. (3)
v) ZCB Call price calculation (Black's Model). (5)

**Full Model Solution:**
*   **i) Role of Margin:**
    *   To acts as a **Performance Bond**.
    *   To prevent the accumulation of losses (Daily Mark-to-Market).
    *   *Initial Margin:* Upfront deposit. *Variation Margin:* Daily adjustment.
*   **ii) Variation Margin Logic:**
    *   If index falls 0.75%, the short position *gains* money. If it falls further, more gains.
    *   $\text{Margin} = \Delta \text{Price} \times \text{Lot Size}$.
*   **iii) Volatility Relation:**
    *   Forward price volatility is approximately equal to forward yield volatility multiplied by the **Modified Duration** of the bond.
*   **iv) Duration and Yield:**
    *   Lower yield = Higher Duration ($D = \sum \frac{t \times CF_t}{(1+y)^t}$).
    *   A bond in a developed economy (low yield) is theoretically *more* sensitive to a 1bp change in rates than a high-yield developing bond.
*   **v) ZCB Call Price:**
    *   Use Black’s Model for bond options: $C = P(0,T) [F_\text{yield} N(d_1) - K N(d_2)]$. (Or a similar adaptation of Black-Scholes).

---

### Question 14 | Exam Term: May 23 | Original Q.2
**Question:**
International diversification via Futures, Options, and Swaps.
i) Advantages/Disadvantages of each for diversification. (10)
ii) Selecting distributions for asset prices (beyond Normal). (10)
iii) Profit from poor market performing using futures. (4)

**Full Model Solution:**
*   **i) Derivative Comparison:**
    *   **Futures:** *Pros:* High liquidity, low cost, no upfront premium. *Cons:* Linear risk (unlimited loss), requires daily margin management.
    *   **Options:** *Pros:* Capped downside, allows for "Asymmetric" returns. *Cons:* Cost (Premium), time decay ($\theta$).
    *   **Swaps:** *Pros:* Customized term and currency. *Cons:* Counterparty risk, harder to unwind.
*   **ii) Beyond the Normal Distribution:**
    *   **Student's t-distribution:** Captures "Fat Tails" (Kurtosis).
    *   **Log-Normal:** Prevents negative prices (though not ideal for returns).
    *   **Stable Paretian:** For extreme events.
*   **iii) Profiting from Bear Markets:**
    *   Short the **Index Future**. If the market falls, you buy back cheaper.
    *   *Why better?* Avoids the borrow-cost of physical short selling and is much faster to execute.

---

### Question 15 | Exam Term: May 23 | Original Q.4
**Question:**
Mr. Hoffer sold puts on Thai banks in 1997.
**Task:** Identify Emotional and Cognitive Biases. [5]

**Full Model Solution:**
*   **Overconfidence:** Believing his team had a "special relationship" or superior insight into Thai government intentions.
*   **Confirmation Bias:** Seeking out Thai officials who confirmed his view that default was impossible while ignoring market signals (waning liquidity).
*   **Representativeness:** Assuming past Thai banking stability would represent the future, despite the regional crisis.
*   **Illusion of Control:** Selling deep-out-of-the-money puts thinking he could manage the risk, ignoring "Tail Risk."

---

### Question 16 | Exam Term: May 23 | Original Q.8
**Question:**
i) Tech analysis pros/cons. (2)
ii) 40-day MA crossover above 20-day MA. (2)
iii) Relative Strength approaches. (3)
iv) Risk in Wheat Future hedge vs. Brent Put hedge. (2)

**Full Model Solution:**
*   **ii) Moving Average Crossover:**
    *   If the *Long-term* (40-day) crosses *above* the *Short-term* (20-day), it is often a **Bearish** signal. It indicates that the recent downward momentum is accelerating compared to the longer trend.
*   **iii) Relative Strength:**
    *   **Top-down:** Identify outperforming sectors, then outperforming stocks within those sectors.
    *   **Bottom-up:** Relative Strength Index (RSI). Buy if RSI < 30 (oversold), sell if > 70 (overbought).
*   **iv) Risk Comparison:**
    *   **Wheat Future (Short):** Basis risk (price of specific wheat grade vs. future grade) and linear exposure.
    *   **Brent Put (Long):** Basis risk (Brent vs. Russian Oil). Downside risk is capped at the premium, but the "hedge" fails if the price spread between Brent and Russian oil widens significantly.

**Mnemonics/Frameworks Applied:**
*   **POMS**: The farmer's **Objectives** are price certainty; the oil producer's **Objectives** are downside protection with upside participation.

---

---

### Question 17 | Exam Term: May 24 | Original Q.1
**Question:**
Actuarial and Legal Fundamentals.
i) What is the central bank statement on future policy called? (1)
ii) What policy addresses monopolizing tech? (1)
iii) Term for an individual with rights to possession under Trust Law. (1.5)
iv) Which regulation form has the fastest response? (1)
v) ESG objective of buying fair trade. (1.5)
vi) Premier League fit and proper scrutiny. (1.5)
vii) Principle explaining the need for qualifications. (1.5)
viii) Which investor class finds expertise a bottleneck? (1)

**Full Model Solution:**
*   i) **Forward Guidance**: High-frequency Central Bank terminology.
*   ii) **Competition Policy** (or Anti-Trust Policy).
*   iii) **The Beneficiary** (or the life tenant in specific trust contexts).
*   iv) **Self-Regulation**: Industry participants can change rules faster than legislation.
*   v) **Social Responsibility** (The 'S' in ESG).
*   vi) **Statutory Regulation** (applied by a governing body).
*   vii) **Competence and Care**: Part of the core principles of institutional investment.
*   viii) **Retail Investors**: They often lack the scale to hire specialized investment expertise.

---

### Question 18 | Exam Term: May 25 | Original Q.5
**Question:**
International diversification for a US investor.
**Task:** Describe achieving exposure via Futures, Options and Equity Swaps. [13]

**Full Model Solution:**
*   **Futures:** The manager buys a "Long" position in a foreign index (e.g., Nifty 50 or FTSE 100). They must hold sufficient cash in a margin account.
*   **Options:** Buy a **Call Option** on the foreign index. This provides upside exposure with the loss capped at the premium paid.
*   **Equity Swaps:** Co A (US investor) agrees to pay a fixed or floating rate to Co B (Bank) in exchange for the "Total Return" of a foreign equity index.
*   *Advantage:* No need to open local brokerage accounts or handle foreign currency directly.

---

### Question 19 | Exam Term: Nov 19 | Original Q.1
**Question:**
Calculate swaption value (right to enter 4-year pay-fixed swap in 2 years).
**Data:** 3-year spot (6.5%), 4-year (6.6%), 5-year (6.75%), 6-year (7%). Volatility 25%. [8]

**Full Model Solution:**
1.  **Forward Swap Rate:** Calculate the 2-year forward 4-year swap rate using the provided spot rates.
2.  **Annuity Factor:** Calculate the present value of a 4-year annuity starting in 2 years.
3.  **Black's Model:** $Value = A \times [f N(d_1) - K N(d_2)]$ where $f$ is the forward swap rate and $K$ is the fixed rate (6%).
4.  **Result:** The value represents the premium required for this "right."

---

### Question 20 | Exam Term: Nov 19 | Original Q.2
**Question:**
Unit-linked product with capital guarantee. Equity crash happens.
i) Discuss how to carry out "equities to bonds" switch at minimum cost. (4)
ii) Liability hedging approaches. (8)

**Full Model Solution:**
*   **i) Minimum Cost Switch:**
    *   **Internal Crossing:** Match buy/sell orders between different funds within the same insurance company to avoid bid-offer spreads.
    *   **Program Trading:** Use an algorithm to sell in small blocks to minimize price impact.
    *   **Derivatives:** Use **Equity Futures** (sell) and **Bond Futures** (buy). This is often faster and cheaper than physical selling.
*   **ii) Liability Hedging:**
    *   **Cash Flow Matching:** Buy ZCBs that mature exactly when the guarantee is likely to be exercised.
    *   **CPPI (Constant Proportion Portfolio Insurance):** Dynamically adjust the equity exposure based on the "cushion" (Fund Value - Floor).
    *   **Static Hedging:** Buy long-dated "Out-of-the-Money" puts.

---

### Question 21 | Exam Term: Nov 19 | Original Q.6
**Question:**
Travel company needs funding.
i) Describe Private Debt. (6)
ii) Private Equity vs. Private Debt suitability. (8)
iii) Tax incentives for startups. (4)
iv) Behavioral finance of the owner (High return vs. interest). (6)

**Full Model Solution:**
*   **i) Private Debt:** Non-bank lending provided by private funds. It is often secured and has higher yields than bank debt but less than equity.
*   **ii) Suitability:**
    *   **Private Equity:** Better if the company has high growth potential but low current cash flow (no interest to pay).
    *   **Private Debt:** Better if the owner wants to keep control (no dilution) and has predictable cash flows to service the debt.
*   **iv) Owner Behavior:**
    *   **Overconfidence / Optimism Bias:** Believing the startup will earn "handsome returns" despite high failure rates.
    *   **Loss Aversion:** Viewing the fixed deposit as "safe" even if inflation erodes its real value.

---

### Question 22 | Exam Term: Nov 20 | Original Q.2
**Question:**
Product with "X% of highest recorded NAV" guarantee.
i) Key contents in presentation of ALM results. (6)
ii) Use of dynamic liability benchmarks. (2)

**Full Model Solution:**
*   **i) Presentation Contents:**
    *   **Scenario Analysis:** Results under 50,000 stochastic scenarios.
    *   **Cost of Guarantee:** The present value of the expected shortfall.
    *   **Sensitivity:** Impact of changes in volatility and interest rates (Greeks).
    *   **Capital Impact:** Required "ALM Mismatch Reserve."
*   **ii) Dynamic Liability Benchmarks:** These adjust the target asset mix as the "guaranteed amount" (the high-water mark) changes over time.

---

### Question 23 | Exam Term: Nov 20 | Original Q.4
**Question:**
Option Payoffs and Strategies.
i) European vs. American cost. (3)
ii) Strategy (Put at 1000, Call at 1100). Explain payoff. (3)
iii) Rationale for the strategy. (1)
iv) Complex payoff (Long Call 1100, Long Call 1000, Short 2 Calls 1050). (3)
v) Rationale. (1)

**Full Model Solution:**
*   **i) Price Comparison:** An American option is always $\ge$ a European option because it includes the "Right of Early Exercise."
*   **ii) Long Put 1000 + Long Call 1100:**
    *   This is a **Strangle**.
    *   *Payoff:* Profitable if price moves aggressively in *either* direction (outside the 1000-1100 range).
*   **iv) Butterfly Spread:**
    *   *Payoff:* Maximum profit if price is exactly 1050. Loss is limited to the initial net premium.

---

### Question 24 | Exam Term: Nov 20 | Original Q.5
**Question:**
Stock options for executives.
i) Merits/Demerits. (6)
ii) Corporate Governance objectives. (2)
iii) Impact of dividend tax changes. (5)
iv) Macro behavioral finance behavior. (10)

**Full Model Solution:**
*   **i) Merits:** Alignment of interests; retention of key talent. **Demerits:** Encourages short-term stock price manipulation; dilution for existing shareholders.
*   **ii) Governance:** Accountability, Transparency, Fairness, and Responsibility to all stakeholders (not just shareholders).

---

### Question 25| Exam Term: Nov 23 | Original Q.2
**Question:**
Sell ATM call/put, buy OTM call/put.
i) Main rationale. (2)
ii) Payoff diagram inflection points. (3)

**Full Model Solution:**
*   **Rationale:** This is an **Iron Butterfly**. The trader expects the price to stay stable (Short Volatility) but wants to limit the maximum loss (hedging with OTM options).
*   **Inflection Points:** The strikes of the options (OTM Put, ATM Put/Call, OTM Call).

---

### Question 26 | Exam Term: Nov 23 | Original Q.3
**Question:**
Futures pricing.
i) What is Cost of Carry? (1)
ii) What is Convenience Yield? (1)
iii) Impact of Export Ban and Repo rate hike on futures. (4)

**Full Model Solution:**
*   **i) Cost of Carry:** Interest cost to fund the asset minus any income (dividends/coupons) generated.
*   **ii) Convenience Yield:** The benefit of holding the physical asset (e.g., to ensure supply during a shortage) rather than the future.
*   **iii) Impacts:**
    *   **Export Ban:** Increases domestic supply; spot price falls; future price might fall less if the ban is temporary (Contango increase).
    *   **Repo Hike:** Increases the "Cost of Carry." Future price rises relative to spot ($F = S(1+r)$).

---

### Question 27 | Exam Term: Nov 23 | Original Q.4
**Question:**
Calculate price of a European call on a 5-year bond.
**Data:** 18% coupon, 1.5 year option life, Strike 135, Volatility 25%, Spot yield 5%. [10]

**Full Model Solution:**
1.  **Bond Price:** Calculate current price of the bond using DCF.
2.  **Forward Bond Price:** Calculate the price of the bond at t=1.5.
3.  **Black's Model:** Standard formula for bond options.
4.  **Result:** The premium required for this "yield-play."

---

### Question 28 | Exam Term: Nov 23 | Original Q.10
**Question:**
Liability Hedging.
i) Definition. (2)
ii) Six problems with the strategy. (3)
iii) Revenue hedging across regions A, B, C. (6)

**Full Model Solution:**
*   **i) Liability Hedging:** Selecting assets whose cash flow or price movements match the underlying liabilities, reducing surplus volatility.
*   **ii) Problems:** 1. Basis risk. 2. Implementation cost. 3. Counterparty risk. 4. Operational complexity. 5. Regulatory change. 6. Opportunity cost (missed upside).

---

### Question 29 | Exam Term: Nov 25 | Original Q.5
**Question:**
ALM for participating whole-life.
i) Discuss key ALM risks (Mismatch, Optionality, Capital). (5)
ii) Propose ALM strategy (Duration/Swaps/Immunization). (14)
iii) Impact on profitability and solvency. (6)
iv) Limitations of traditional ALM (Non-parallel shifts/Behavioral). (5)

**Full Model Solution:**
*   **i) Risks:**
    *   **Optionality:** Policyholders have the "Surrender Option" which they exercise if rates rise (to invest elsewhere).
    *   **Mismatch:** 25-year duration liabilities vs 10-year assets.
*   **iv) Limitations:** Traditional ALM often assumes **Parallel Shifts** in the yield curve and ignores that "Policyholder Behavior" (surrenders) is not static—it is a function of the interest rate environment.

---

### Question 30 | Exam Term: Sep 21 | Original Q.1
**Question:**
Write short notes: i) Cross-border tax schemes. ii) Role of NEDs. iii) Herding. iv) Options on decision making. v) Tax issues in investment. [13]

**Full Model Solution:**
*   **iii) Herding:** Information cascade where managers follow others rather than their own research to avoid the "reputational risk" of being wrong alone.

---

### Question 31 | Exam Term: Sep 21 | Original Q.2
**Question:**
CDS working.
**Scenario:** Bank buys corporate bond with 1% spread over Gov. Buys CDS from XYZ.
i) Working description. (4)
ii) Estimate cost. (4)
iii) Regulations. (6)

**Full Model Solution:**
*   **i) CDS Working:** The bank pays a periodic fee (the "Spread"). If the infrastructure company defaults, XYZ pays the bank the "Face Value" of the bond.
*   **ii) Cost:** Should be close to the 1% credit spread (No-Arbitrage principle).

---

### Question 32 | Exam Term: Sep 21 | Original Q.3
**Question:**
3-year forward on equity index.
i) Calculate return from forward vs. index. (13)
ii) Option strategy with 7 key points (Iron Condor logic). (10)

**Full Model Solution:**
*   **i) Calculation:** Compare $(F_{exit} - F_{entry})$ vs. $(S_{exit} - S_{entry} + \text{Dividends})$. The forward investor doesn't get dividends but also doesn't tie up capital.
*   **ii) Strategy view:** Market-neutral with defined risk.

---

---

<a name="chapter-2"></a>
## Chapter 2 – Portfolio Theory & ALM

### Question 33 | Exam Term: Dec 22 | Original Q.7
**Question:**
Bond switching and management.
i) 10-year 5% vs. 10-year 4.8%. Describe switch. (4)
ii) 10-year 5% vs. 20-year 4.5%. Describe switch. (4)
iii) Passive vs. Active advantages. (3)
iv) Active vs. Passive for an annuity portfolio. (5)

**Full Model Solution:**
*   **i) Yield-Pick-Up Switch:** Moving from a lower yield (7.8%) to a higher yield (8.6%) for similar duration.
*   **ii) Policy Switch:** Moving from a 10-year to a 20-year bond significantly changes the **Duration** of the portfolio. This is a bet on the *slope* of the yield curve or a strategic ALM shift.
*   **iii) Management Comparison:**
    *   **Passive:** Low cost, transparency, no "Manager Risk."
    *   **Active:** Potential for alpha, ability to defensive position in bear markets.
*   **iv) For Annuity Portfolio:**
    *   **Passive** (Cash flow matching) is generally preferred to ensure the guaranteed payments (NTCC) are met. Active management adds "Mismatch Risk" which may incur higher capital charges.

---

### Question 34 | Exam Term: Jul 22 | Original Q.6
**Question:**
i) Asset pricing models explanation. (6)
ii) Longevity bond for pension scheme. Pros/Cons. (6)
iii) Global equity fund structure (75% Passive, 25% Active). Reasons. (6)

**Full Model Solution:**
*   **i) Asset Pricing Models:**
    *   **CAPM:** $E(R_i) = R_f + \beta_i(E(R_m) - R_f)$. Focuses on systematic risk.
    *   **APT / Multi-factor Models:** Consider multiple sources of risk (Inflation, GDP, Size).
*   **ii) Longevity Bond:**
    *   *Pros:* Perfect hedge for longevity risk; removes "Tail Risk" of people living longer than expected.
    *   *Cons:* High cost/premium; limited market supply; counterparty risk if the issuer is not highly rated.
*   **iii) Core-Satellite Approach:**
    *   **75% Passive (Core):** Low-cost exposure to the broad market.
    *   **25% Active (Satellite):** Concentrated bets to generate alpha.
    *   *Reason:* Balances the need for market returns with the goal of outperformance while keeping overall costs manageable.

---

### Question 35 | Exam Term: Jul 22 | Original Q.7
**Question:**
i) Risk budgeting for a scholarship fund. (8)
ii) Calculate performance measures (Sharpe, Treynor, Jensen, IR). (5)
iii) Choose between Trust A and Trust B. (7)

**Full Model Solution:**
*   **i) Risk Budgeting:** Determining how much "Total Risk" (VaR or Tracking Error) the fund can afford to take to meet its objectives (scholarships) and allocating that risk across different asset classes or managers.
*   **ii) Performance Formulas:**
    *   **Sharpe Ratio:** $(R_p - R_f) / \sigma_p$
    *   **Treynor Ratio:** $(R_p - R_f) / \beta_p$
    *   **Jensen's Alpha:** $R_p - [R_f + \beta_p(R_m - R_f)]$
    *   **Information Ratio:** $(\text{Active Return}) / (\text{Tracking Error})$
*   **iii) Trust Choice:** Select the one with the higher **Risk-Adjusted** return. If the fund is the investor's *entire* portfolio, use Sharpe. If it is part of a diversified portfolio, use Treynor/Alpha.

---

### Question 36 | Exam Term: Mar 21 | Original Q.1
**Question:**
i) Active management styles. (5)
ii) Estimating RAROC. (6)
iii) Merits/Demerits of P/E and RAROC ranking. (4)
iv) Suggested improvements. (6)

**Full Model Solution:**
*   **i) Styles:** Value (low P/E), Growth (high earnings growth), Momentum (past winners), Small-cap.
*   **ii) RAROC:** $\text{Expected Return} / \text{Economic Capital}$. Economic capital is the amount of capital needed to cover potential losses at a given confidence level.
*   **iii) Merits:** Quantitative and disciplined. **Demerits:** P/E can be misleading if earnings are temporary; RAROC depends heavily on the risk model accuracy.

---

### Question 37 | Exam Term: Mar 21 | Original Q.2
**Question:**
i) Chain linking explanation. (2)
ii) Bond index chain linking examples. (1)
iii) Index calculation (Weighted Arithmetic). (6)

**Full Model Solution:**
*   **i) Chain Linking:** The process of joining two different index series (e.g., when a stock is replaced) by using a "Link Factor" so the index value remains continuous.
*   **ii) Examples:** 1. When a bond matures and is replaced. 2. When a bond's rating changes (e.g., falls below Investment Grade).

---

### Question 38 | Exam Term: Mar 21 | Original Q.3
**Question:**
i) ALM modeling process and key issues. (12)
ii) Use MPT to determine efficient strategies. (3)
iii) Monitoring liquidity risk. (5)

**Full Model Solution:**
*   **i) ALM Process:** 1. Liability projection. 2. Asset allocation modeling. 3. Stochastic simulation of surplus. 4. Optimization of risk-return. **Key Issues:** Correlation between assets and liabilities; inflation sensitivity.
*   **iii) Liquidity Monitoring:** **Liquidity Ratios** (Cash/Total Assets); **Stress Testing** (What if 20% of policyholders surrender?).

---

### Question 39 | Exam Term: Mar 21 | Original Q.5
**Question:**
i) Regulatory regimes. (5)
ii) Corporation tax systems. (3)
ii) Behavioral finance cases. [17]

**Full Model Solution:**
*   **ii) Tax Systems:**
    *   **Classical:** Double taxation of dividends (at corporate and individual level).
    *   **Imputation:** Provides a tax credit to shareholders for tax already paid by the company.
    *   **Partial Integration:** Lower tax rates for dividend income.
*   **Behavioral cases:**
    *   a) **Status Quo Bias / Familiarity Bias**: Re-investing in the same fund despite other better options.
    *   b) **Hindsight Bias**: The coach claiming he "knew" what should have happened after the event.
    *   c) **Overconfidence / Better-than-average effect**: Most students rating themselves in the top quartile.

---

### Question 40 | Exam Term: Mar 22 | Original Q.2
**Question:**
i) Define VaR. (2)
ii) ALM exercise stages. (3)
iii) Stochastic model for pension solvency. (4)

**Full Model Solution:**
*   **i) VaR:** The maximum loss expected over a given time period at a specific confidence level (e.g., $10m loss at 95% confidence over 1 month).

---

### Question 41 | Exam Term: May 23 | Original Q.1
**Question:**
i) IFRS motives. (6)
ii) IFRS 9 requirements. (2)
iii) Market risk monitoring system. (5)
iv) Economic factors of success. (2)
v) Mean-variance assumptions. (4)

**Full Model Solution:**
*   **v) MPT Assumptions:** 1. Investors are rational and risk-averse. 2. Markets are efficient. 3. No transaction costs or taxes. 4. Returns are normally distributed.

---

### Question 42 | Exam Term: May 23 | Original Q.3
**Question:**
Matching office rental payments with bonds.
**Task:** Identify practical problems. [5]

**Full Model Solution:**
*   **Non-matching amounts:** Zero-coupon bonds might not be available in the exact denominations needed.
*   **Inflation risk:** If rent is linked to CPI but bonds are fixed-interest.
*   **Counterparty risk:** Default on the government bond (low but non-zero).
*   **Reinvestment risk:** If coupons from coupon-paying bonds cannot be reinvested at the target rate.

---

### Question 43 | Exam Term: May 23 | Original Q.7
**Question:**
i) Securities transaction tax (STT) implications. (4)
ii) Withholding taxes note. (3)

**Full Model Solution:**
*   **i) STT:** Increases transaction costs; reduces market turnover/liquidity; may lead to wider bid-offer spreads.
*   **ii) Withholding Tax:** Tax deducted at source on cross-border dividends/interest. Can lead to "Tax Drag" if a treaty doesn't allow for a full reclaim.

---

### Question 44 | Exam Term: May 23 | Original Q.9
**Question:**
i) Calculate returns. (2)
ii) Attribution analysis (Selection vs. Allocation). (6)
iii) Comment on results. (2)

**Full Model Solution:**
*   **Attribution Formula:**
    *   **Allocation Effect:** $\sum (w_p - w_b) \times R_b$
    *   **Selection Effect:** $\sum w_b \times (R_p - R_b)$
    *   **Interaction Effect:** $\sum (w_p - w_b) \times (R_p - R_b)$

---

### Question 45 | Exam Term: May 24 | Original Q.3
**Question:**
i) Five key risks in bank loan portfolio. (7)
ii) What is LDI? (1)
iii) Pros/Cons of LDI. (5)
iv) LDI scenarios. (2)

**Full Model Solution:**
*   **i) Bank Risks:** Credit risk (default), Interest rate risk (mismatch), Liquidity risk, Operational risk, Concentration risk.
*   **ii) LDI:** Liability-Driven Investment. Strategy where the primary goal is to match assets to the timing and amount of liabilities.

---

### Question 46 | Exam Term: May 24 | Original Q.7
**Question:**
i) Active money calculation. (2)
ii) Information Ratio and Strategic Risk. (6)
iii) Expected Shortfall (ES) vs VaR. (7)

**Full Model Solution:**
*   **iii) ES vs VaR:** VaR tells you the "barrier" but not the "depth" of the loss beyond the barrier. **Expected Shortfall** (Tail VaR) provides the average loss given that the loss exceeds the VaR threshold.

---

### Question 47 | Exam Term: May 24 | Original Q.8
**Question:**
i) Time vs Money Weighted Return. (5)
ii) Relative strength trading rule. (3)

**Full Model Solution:**
*   **Money-Weighted Return (MWR):** It is the IRR of the portfolio. Highly sensitive to the *timing* of cash flows. If the manager has no control over when the client adds/removes money, MWR is an unfair measure of the manager's skill.

---

### Question 48 | Exam Term: May 24 | Original Q.10
**Question:**
i) Absolute vs Relative pricing. (2)
ii) PV01 utility. (2)
iii) DV01 calculation. (6)

**Full Model Solution:**
*   **ii) PV01:** The change in the value of an asset for a 1 basis point (0.01%) move in interest rates. Essential for precisely hedging interest rate sensitivity.

---

---

### Question 49 | Exam Term: May 25 | Original Q.1
**Question:**
Bond Forwards vs. FRAs.
i) What is a Bond forward? (2)
ii) Difference between Bond forwards and FRAs? (6)
iii) Liquidity risks in FRA portfolio and mitigation. (6)

**Full Model Solution:**
*   **i) Bond Forward:** A contract to buy or sell a specific bond at a future date for a pre-agreed price.
*   **ii) Differences:** 1. Underlying: Bond vs. Interest Rate level. 2. Settlement: Physical delivery vs. Cash settlement of the interest differential. 3. Risk: Bond forwards include credit risk of the issuer; FRAs only have counterparty risk.
*   **iii) Liquidity Risk:** The risk of being unable to exit a position without significant price impact. **Mitigation:** Use standardized contracts; clear through a central counterparty (CCP); maintain a high "Liquidity Buffer" of cash.

---

### Question 50 | Exam Term: Nov 19 | Original Q.4
**Question:**
Portfolio Performance and CAPM.
i) Definitions: Efficient frontier, Optimal portfolio. (2)
ii) Plot efficient frontier points and minimum variance portfolio. (7)
iii) Show market price of risk is 32.06%. (1)
iv) Risk adjusted measures for Manager X and Y. Which is better? (6)

**Full Model Solution:**
*   **iii) Market Price of Risk (Sharpe Ratio of Market):** $(R_m - R_f) / \sigma_m$. Using the sample data, this equates to 32.06%.
*   **iv) Manager Selection:** Choose **Manager X** if the Treynor ratio or Alpha is higher, assuming the investor is well-diversified. If this is the *only* fund, Manager Y might be better if their Sharpe is higher.

---

### Question 51 | Exam Term: Nov 19 | Original Q.5
**Question:**
i) Describe strategies to exploit interest rate expectations (Level, Slope, Spread). (5)
ii) Protect equity portfolio from expected fall using derivatives. (5)
iii) Competitive benchmarking difficulties. (8)

**Full Model Solution:**
*   **i) Exploiting Expectations:**
    *   **Level:** If rates fall, increase duration (buy long bonds).
    *   **Slope:** If curve steepens, buy short-dated and sell long-dated bonds (Bullet vs. Barbell).
    *   **Spread:** If spreads narrow, buy corporate bonds and sell Gov bonds.
*   **iii) Benchmarking Difficulties:** 1. Mismatch in risk appetite. 2. Difficulty in obtaining real-time competitor data. 3. "Survivorship Bias" in published indices.

---

### Question 52 | Exam Term: Nov 20 | Original Q.1
**Question:**
Diversification and Credit Risk.
i) Show benefits of diversification with 4 assets. (2)
ii) Factors ignored by MPT. (3)
iii) Key factors in managing credit risk. (5)

**Full Model Solution:**
*   **i) Diversification Math:** $\sigma_p^2 = \frac{1}{n} \sigma^2$. As $n$ increases, the portfolio variance approaches zero if assets are independent.
*   **ii) MPT Ignoring:** Taxes, Transaction costs, non-normal distributions (fat tails), and investor behavior/irrationality.
*   **iii) Credit Risk Factors:** Credit ratings, Covenants in bond documents, Sector concentration, and Collateral quality.

---

### Question 53 | Exam Term: Nov 20 | Original Q.3
**Question:**
Fixed Interest Portfolio Management.
i) Actions to alter portfolio for high inflation view. (4)
ii) Reasons for deviation from benchmark. (3)
iii) Calculate tracking error. (4)
iv) Performace comment. (4)
v) Usefulness of forward-looking tracking error. (3)

**Full Model Solution:**
*   **i) Inflation View:** To hedge against *high* inflation, the manager should **Decrease Duration** (inflation often leads to rising rates, which hurts long bonds) or switch to **Index-Linked Bonds**.
*   **v) Forward-looking Tracking Error:** Uses a risk model to anticipate potential deviation before it happens, allowing for proactive risk management rather than "Post-mortem" analysis.

---

### Question 54 | Exam Term: Nov 23 | Original Q.1
**Question:**
ESG Stance.
i) Justify why ESG can generate better long-term returns. (6)
ii) Bad corporate governance flags. (3)

**Full Model Solution:**
*   **i) ESG Justification:** 1. Lower regulatory risk (e.g., carbon taxes). 2. Better reputation and brand value. 3. Lower cost of capital due to reduced litigation risk. 4. Better operational efficiency (lower energy usage).
*   **ii) Flags:** Lack of board independence; opaque executive compensation; history of environmental fines; "Poison Pillar" anti-takeover provisions.

---

### Question 55 | Exam Term: Nov 23 | Original Q.6
**Question:**
Identify Behavioural Biases:
i) Contrarian buying losers. (1)
ii) Trend trader on small caps. (1)
iii) Retail day trader following TV. (1)
iv) Middle-aged salary choosing 12% loan over 7% deposit. (1)
v) Alpha-blaming manager. (1)

**Full Model Solution:**
*   iv) **Mental Accounting**: Treating the loan and the deposit as separate "buckets" rather than looking at the net interest loss of 5%.
*   v) **Self-Serving Bias**: Attributing success to skill and failure to "poor research" or bad luck.

---

### Question 56 | Exam Term: Nov 23 | Original Q.8
**Question:**
Active Bond Management.
i) Define Active bond management. (1)
ii) Two approaches. (2)
iii) Three techniques to identify each. (3)
iv) Switch analysis (XGB 3.5% vs. 3% vs. 2.75%). (6)

**Full Model Solution:**
*   **i) Active Management:** Continual adjustment of the portfolio to outperform a benchmark by exploiting market inefficiencies or anticipating yield curve moves.
*   **ii) Approaches:** 1. **Yield Curve Anticipation**. 2. **Sector Overlay** (identifying undervalued credit).

---

### Question 57 | Exam Term: Nov 23 | Original Q.11
**Question:**
Asset Pricing Models.
i) Main assumption behind models. (1)
ii) Calculate expected return using SMB and HML (Fama-French). (2)
iii) Compare with standard CAPM result. (3)

**Full Model Solution:**
*   **i) Assumption:** Investors are risk-averse and require a premium for taking on **Systematic (non-diversifiable) Risk**.
*   **ii) Fama-French Calculation:** $E(R) = R_f + \beta (R_m - R_f) + s(SMB) + h(HML)$.

---

### Question 58 | Exam Term: Nov 23 | Original Q.12
**Question:**
Cosmic Wealth Fund.
i) Difference in returns between actual and benchmark. (4)
ii) Excess return from minerals. (2)
iii) Comment on CIO's decision. (4)

**Full Model Solution:**
*   **CIO's Decision:** By allocating to "Cosmic Minerals," the CIO added a **Diversifying Asset Class** with a different return profile than bonds. This likely increased the **Sharpe Ratio** of the total fund.

---

### Question 59 | Exam Term: Nov 25 | Original Q.2
**Question:**
SAA Policy Review.
i) Explain theories (MPT, CAPM, EMH, LDI). (8)
ii) Real-world factors (M frictions, behavior, regulation). (6)
iii) Practical balance of return vs. matching. (6)

**Full Model Solution:**
*   **ii) Real-world Frictions:** Transaction costs make "Continuous Rebalancing" (as assumed in MPT) impossible. **Behavioral Biases** (like framing) affect the board's risk appetite.

---

### Question 60 | Exam Term: Nov 25 | Original Q.3
**Question:**
Attribution.
i) Calculate Allocation, Selection, and Interaction effect. (12)
ii) Asset class contribution. (4)
iii) Incentive fees and bonus pool fairness. (4)

**Full Model Solution:**
*   **iii) Incentive Fees:** Should be based on the **Selection Effect** (the manager's skill in picking stocks) rather than the **Allocation Effect** (which might be a lucky bet on the sector).

---

### Question 61 | Exam Term: Nov 25 | Original Q.4
**Question:**
ESG Mandates.
i) Importance of ESG. (3)
ii) Calculate ESG-adjusted Sharpe ratio. (3)
iii) specialized vs. overall mandates pros/cons. (7)

**Full Model Solution:**
*   **Specialized Mandates:** *Pro:* High expertise in a specific area (e.g., Green Energy). *Con:* Higher total fees and the "Silo" effect.

---

---

<a name="chapter-3"></a>
## Chapter 3 – Risk Management

### Question 62 | Exam Term: Dec 22 | Original Q.1
**Question:**
i) Describe impact of interest rate hike on the economy. (5)
ii) List principal aims of Regulation. (2)
iii) Explain how ESG factors can improve investment performance. (4)
iv) Describe main risks of a large metro rail infrastructure project. (10)

**Full Model Solution:**
*   **i) Rate Hike Impact:** 1. Increases borrowing costs for firms (reduces investment). 2. Increases mortgage payments for households (reduces consumption). 3. Strengthens local currency (hurts exports). 4. Lowers inflation by reducing aggregate demand.
*   **ii) Aims of Regulation:** 1. Protect consumers (investors). 2. Maintain market confidence. 3. Ensure financial stability (prevent systemic risk). 4. Reduce financial crime.
*   **iv) Project Risks:** Construction risk (delays/cost overruns); Revenue/Traffic risk (utilization rate); Regulatory/Political risk; Force Majeure (environmental); Interest rate risk on project financing.

---

### Question 63 | Exam Term: Dec 22 | Original Q.4
**Question:**
Fund introducing Crypto and Private Equity.
i) Describe main financial risks. (5)
ii) How to monitor and control these risks. (5)

**Full Model Solution:**
*   **i) Financial Risks:**
    *   **Crypto:** High volatility; Lack of fundamental valuation; Custody risk (hacking); Regulatory risk (bans).
    *   **Private Equity:** Illiquidity (long lock-in); J-curve effect; Opaque valuation (stale pricing).
*   **ii) Monitoring:** Frequent stress testing; Concentration limits (e.g., max 2% in crypto); Independent valuation committees; Use of "Cold Storage" for crypto assets.

---

### Question 64 | Exam Term: Mar 19 | Original Q.2
**Question:**
Cat-Bond purchase for pension fund.
i) Process for creating Cat-Bonds (Cash flows). (4)
ii) Questions to ask the salesperson. (3)
iii) Advantages/Risks for insurer and investor. (7)

**Full Model Solution:**
*   **i) Process:** 1. Insurer (Sponsor) sets up an SPV. 2. Investors buy bonds from SPV. 3. SPV invests cash in safe Treasuries. 4. If no disaster occurs, investors get coupons + principal. 5. If disaster occurs, cash is released to Sponsor; investors lose principal.
*   **iii) Advantages (Investor):** Zero correlation with financial markets; high yield for "taking environmental risk." **Risks:** Total loss of principal if trigger event occurs.

---

### Question 65 | Exam Term: Mar 19 | Original Q.6
**Question:**
Life insurance exposed to rising bond yields.
i) Comment on yield increase risk. (4)
ii) Recommend product conditions to limit risk. (8)
iii) Model asset-liability mismatch reserve. (8)

**Full Model Solution:**
*   **i) Yield Increase Risk:** If yields rise, the market value of the bonds (Assets) falls. If policyholders surrender (to get better rates elsewhere) and there's no surrender charge, the insurer incurs a loss.
*   **ii) Product Conditions:**
    *   **Market Value Adjustment (MVA):** Reduce the surrender value if market rates have risen.
    *   **Exit Penalties:** Discourage early withdrawal.
    *   **Deferred Pay-out:** Prevent "Bank Runs" by delaying liquidity.

---

### Question 66 | Exam Term: Mar 19 | Original Q.7
**Question:**
Establishing a new investment company.
i) Outline main financial risks. (5)
ii) Explain process to establish efficient risk-taking. (8)
iii) Advantages of risk budgeting. (2)

**Full Model Solution:**
*   **ii) Process:** 1. Define high-level risk appetite. 2. Identify all risk sources. 3. Rank sources by "Reward per unit of risk." 4. Allocate risk limits (VaR/TE) to the most rewarding areas. 5. Establish monitoring and breach protocols.

---

### Question 67 | Exam Term: May 24 | Original Q.5
**Question:**
i) Similarities between CFDs and Forwards. (2)
ii) Differences. (4)
iii) Two main non-market risks of CFDs. (3)

**Full Model Solution:**
*   **i) Similarities:** Both are OTC derivatives; both allow for leveraged exposure to price movements without physical ownership.
*   **ii) Differences:** CFDs have no fixed expiry date (can be held indefinitely); CFDs are usually settled daily (like futures margin).
*   **iii) Non-market risks:** **Counterparty Risk** (OTC nature); **Margin Call risk** (liquidity needed to cover daily moves).

---

### Question 68 | Exam Term: May 25 | Original Q.2
**Question:**
Role of RBI and repo rate cut impact.
i) Role of Central Bank. (3)
ii) Non-market (direct) controls. (5)
iii) Impact of RBI 25bps rate cut. (9)
iv) Areas of concern for a Life Insurance Investment Actuary. (9)

**Full Model Solution:**
*   **iv) Actuary Concerns:**
    *   **Asset Values:** Bonds rise in price (positive for current surplus).
    *   **New Business Pricing:** Lower expected future returns mean new policies must have higher premiums or lower guarantees.
    *   **ALM:** If duration is not matched, the surplus may become more volatile as rates fall further.

---

### Question 69 | Exam Term: Nov 23 | Original Q.5
**Question:**
Commercial bank credit risk.
i) 4 distinct sources of credit risk. (2)
ii) How to create a credit VaR model. (6)

**Full Model Solution:**
*   **i) Sources:** Default risk; Credit migration (downgrade) risk; Concentration risk; Counterparty risk on derivatives.
*   **ii) VaR Model:** 1. Data on Default Probabilities (PD). 2. Data on Loss Given Default (LGD). 3. Modeling correlations between borrowers. 4. Monte Carlo simulation of total portfolio losses.

---

### Question 70 | Exam Term: Nov 23 | Original Q.9
**Question:**
Hedge fund performance analysis.
i) Compute Sharpe, Treynor, Alpha, IR for Fund 1 and 2. (7)
ii) Target fund for investment. (2)

**Full Model Solution:**
*   **Calculation Logic:** Use the standard formulas. Always use the *Arithmetic Mean* for average returns and the *Standard Deviation* of returns for risk.

---

### Question 71 | Exam Term: Sep 21 | Original Q.4
**Question:**
NIFTY 50 tracker fund market risk.
**Task:** Outline process to monitor and control market risk. [10]

**Full Model Solution:**
*   **Process:** 1. **Tracking Error Monitoring**: Ensure the fund doesn't drift from NIFTY 50. 2. **Daily VaR calculation**. 3. **Stress Testing** (e.g., 2008 crash scenario). 4. **Limit Setting**: Hard limits on sector deviation or cash levels. 5. **Independent Oversight**: Risk team reporting directly to the Board.

---

### Question 72 | Exam Term: Sep 21 | Original Q.7
**Question:**
i) Asset pricing models. (2)
ii) Absolute vs. Relative pricing. (4)
iii) Risk budgeting process. (5)

**Full Model Solution:**
*   **ii) Pricing Strategies:**
    *   **Absolute:** Focus on intrinsic value (DCF). The goal is a specific return (e.g., Libor + 4%).
    *   **Relative:** Focus on value compared to a benchmark (e.g., outperform S&P 500).

---

---

<a name="chapter-4"></a>
## Chapter 4 – Behavioural Finance & ESG

### Question 73 | Exam Term: Dec 22 | Original Q.5
**Question:**
i) Describe the Covid-19 market cycle (40% fall, 120% recovery) using behavioural finance. (7)
ii) Explain why herding is a concern for financial markets. (3)

**Full Model Solution:**
*   **i) Behavioral Interpretation:**
    *   **Panic Selling / Availability Bias:** The initial 40% fall was driven by extreme fear and the "Recency" of the pandemic news. Investors extrapolated the current disaster into a total economic collapse.
    *   **Fear Of Missing Out (FOMO) / Recovery:** The 120% recovery was driven by a reversal in sentiment, liquidity injections, and investors rushing back in as they saw others profiting.
    *   **Overreaction:** Markets typically overreact to negative news (downwards) and then "Mean Revert" upwards.
*   **ii) Herding Concern:**
    *   **Instability:** It leads to asset bubbles and sudden crashes.
    *   **Price Inefficiency:** Assets move away from their fundamental values because everyone is following the trend rather than information.
    *   **Systemic Risk:** If everyone is "Long" the same trade, a reversal can lead to a liquidity crunch as all try to exit at once.

---

### Question 74 | Exam Term: Jul 22 | Original Q.5
**Question:**
High guaranteed annuity rates from the 90s are now a challenge. Use behavioural finance to explain. [5]

**Full Model Solution:**
*   **Anchoring:** Insurers in the 90s "anchored" their expectations to then-current high interest rates (10%+), failing to imagine a zero-rate world.
*   **Extrapolation Bias:** Assuming the historical trend of high rates would continue indefinitely.
*   **Status Quo Bias:** Continuing to offer the same products because "that's what we've always done," failing to adjust to the regime shift.

---

### Question 75 | Exam Term: Mar 21 | Original Q.6
**Question:**
i) Fundamental analysis for 'virtual event' company. (12)
ii) ESG exclusion of a top-performing retailer. Comment on marketing manager's view. (4)

**Full Model Solution:**
*   **i) Fundamental Points:** 1. **Industry Growth** (demand for remote work/events). 2. **Scalability** (low marginal cost). 3. **Moat** (switching costs/proprietary tech). 4. **Financials** (Cash flow, debt levels). 5. **Quality of Management**.
*   **ii) Marketing Manager View:**
    *   The manager argues for **Fiduciary Duty** to maximize returns.
    *   *Counter-argument:* ESG is not just "Ethical"—it's a **Risk Management** tool. A high-performing retailer with poor ESG (e.g., labor violations) faces significant future regulatory and litigation risk that could destroy shareholder value.

---

### Question 76 | Exam Term: Mar 22 | Original Q.1
**Question:**
i) Gov economic objectives. (2)
ii) Natural monopoly. (1)
iii) Regulating monopolies. (2)
iv) Tax system changes (CGT, Income, Earned) for wealth redistribution. (5)
v) Low sentiment observations (VIX, IPOs, etc.). (3)
vi) Noise traders' impact. (2)

**Full Model Solution:**
*   **iv) Tax for Redistribution:** 1. **Earned Income:** Progressive rates (higher for high earners). 2. **CGT/Investment Income:** Higher rates to target wealth accumulation from capital rather than labor.
*   **v) Low Sentiment:** High VIX (high fear); Low share turnover (apathetic market); Wide bid-offer spreads; Nil to low IPO activity; High demand for defensive high-dividend shares.

---

### Question 77 | Exam Term: May 25 | Original Q.4
**Question:**
Taxation effect on investment decision-making. [4]

**Full Model Solution:**
*   **Asset Location:** Investors choose specific accounts (e.g., Pension/ISA) depending on tax efficiency.
*   **Asset Class Choice:** A preference for Capital Gains (often taxed lower) over Dividends.
*   **Holding Period:** Taxing gains only on "Realization" encourages longer holding periods (Lock-in effect).
*   **Assessment:** Use **After-Tax IRR** and compare it across different tax regimes.

---

### Question 78 | Exam Term: Nov 25 | Original Q.1
**Question:**
Training session concepts: i) Herding. ii) Cross-sectional momentum. iii) Mood influence. iv) Belief preservation. [12]

**Full Model Solution:**
*   **ii) Cross-sectional Momentum:** The strategy of buying recent "Winner" stocks and selling "Losers" within the same universe. Implication: Can lead to overvaluation as price drifts from fundamentals.
*   **iv) Belief Preservation:** The tendency to ignore evidence that contradicts existing beliefs (Confirmation Bias). Implication: Managers may stay in losing trades too long because they refuse to admit their original thesis was wrong.

---

---

<a name="chapter-5"></a>
## Chapter 5 – Taxation & Regulation

### Question 79 | Exam Term: Jul 22 | Original Q.4
**Question:**
i) Impact of tax on corporate dividend policy. (3)
ii) Factors for an investor to maximize net returns. (4)

**Full Model Solution:**
*   **i) Dividend Policy:** If dividends are taxed higher than capital gains, firms may prefer **Share Buybacks** or reinvesting profits to encourage share price growth.
*   **ii) Investor Max Returns:** 1. Utilizing tax-free allowances. 2. Timing the sale of assets to utilize CGT exemptions. 3. Matching income with lower-bracket tax years. 4. Investing through tax-advantaged vehicles (Pension/ISA).

---

### Question 80 | Exam Term: Mar 19 | Original Q.1
**Question:**
Legislation principles for Trustees dealing with external managers. [8]

**Full Model Solution:**
*   **Duty of Care:** Trustees must exercise the same care as a "prudent person" would with their own money.
*   **Fiduciary Responsibility:** Solely acting in the interest of the beneficiaries.
*   **Appropriate Allocation:** Ensuring the external manager's mandate fits the scheme's SAA.
*   **Monitoring:** Regular performance review and the power to terminate underperforming managers.

---

### Question 81 | Exam Term: May 24 | Original Q.2
**Question:**
Dividend vs. Buyback under tax: Income Tax (10-45%), STCG (20%), LCG (10%).
i) Advantages/Disadvantages of both. (8)
ii) Other factors influencing the decision. (2)

**Full Model Solution:**
*   **i) Strategy Comparison:**
    *   **Dividend:** Adv: Signal of stability. Disadv: High impact for top-rate taxpayers (up to 45%).
    *   **Buyback:** Adv: Flexible (can be cancelled); Taxed as Capital Gain (only 10% if held long-term). Disadv: May signal a lack of growth opportunities.
*   **ii) Other Factors:** **EPS Impact** (Buybacks reduce share count, increasing EPS); **Flexibility** (Dividends are "sticky").

---

### Question 82 | Exam Term: Nov 19 | Original Q.3
**Question:**
i) RBI repo rate cut objective and BoP impact. (8)
ii) Rationale for linking lending rates to external benchmarks. (4)

**Full Model Solution:**
*   **i) Repo Cut Objective:** Stimulate growth by lowering the cost of credit. **BoP Impact:** Lower rates may lead to capital outflows (investors seek higher yields elsewhere), weakening the currency.
*   **ii) External Benchmarking:** Ensures faster **Monetary Transmission**. Banks used to be slow to pass rate cuts to consumers; an external link forces synchronous adjustments.

---

### Question 83 | Exam Term: Nov 23 | Original Q.7
**Question:**
i) Tax considerations for international investing. (2)
ii) Flaws in "Tax Foreign Income at higher rate" strategy. (4)

**Full Model Solution:**
*   **i) International Tax:** Double Taxation Treaties (DTAA); Withholding taxes on foreign coupons; Reclaim procedures.
*   **ii) Flaws:** 1. **Capital Flight:** Wealthy individuals move capital to jurisdictions where it isn't penalized. 2. **Retaliation:** Other countries might raise taxes on the country's own exports. 3. **Reduced Diversification:** Discourages local investors from risk-sharing globally, increasing domestic systemic risk.

---

---

<a name="chapter-6"></a>
## Chapter 6 – Performance Measurement

### Question 84 | Exam Term: Dec 22 | Original Q.2
**Question:**
Strategic Asset Allocation (SAA) change.
i) Key issues when changing SAA. (4)
ii) Info required to value potential new investments. (5)
iii) Process to determine price range for share offer. (7)
iv) Why might a price diff from "Fair Market Price" be recommended? (3)

**Full Model Solution:**
*   **i) SAA Issues:** 1. **Liquidity:** Can the move be made without huge market impact? 2. **Transaction Costs:** Will the cost wipe out the expected gain? 3. **Time Horizon:** Is the shift consistent with long-term goals? 4. **Risk Profile:** Does the new SAA breach internal or regulatory risk limits?
*   **iv) Price Deviation Reasons:** 1. **Strategic Value:** The acquisition offers synergies not captured in market price. 2. **Marketing:** Underselling an IPO to ensure "Pop" and success. 3. **Liquidity Discount:** Buying a large block at a discount.

---

### Question 85 | Exam Term: Mar 22 | Original Q.5
**Question:**
Stock selection change based on expectation of high domestic growth. [4]

**Full Model Solution:**
*   **Cyclical Pivot:** Shift from "Defensive" (Utilities, Staples) to **"Cyclical"** (Consumer Discretionary, Banking). 
*   **Domestic Focus:** Since international growth is low, favor firms with 100% domestic revenue rather than global exporters.

---

### Question 86 | Exam Term: May 23 | Original Q.5
**Question:**
Limitations of resilience testing. [5]

**Full Model Solution:**
*   **Scenario Selection Bias:** Only tests "Imagined" crises, not the "Unknown Unkowns."
*   **Correlation Breakdown:** In a crisis, standard correlations converge to 1, which testing may not capture.
*   **Static Nature:** Ignores management actions that might be taken *during* the stress event.

---

### Question 87 | Exam Term: May 23 | Original Q.6
**Question:**
Individual with "perfect" ALM still has a cashflow shortage. What technique solves this? [5]

**Full Model Solution:**
*   **Cash Flow Budgeting & Liquidity Modeling:** ALM often focuses on *Price* or *Value* matching. The individual failed to match **Term** (liquidity needs for education/vacation).
*   *Technique:* Keep a "Cash Buffer" or "Sinking Fund" for known short-term outflows, matching long-term assets only to long-term liabilities (retirement).

---

### Question 88 | Exam Term: May 23 | Original Q.10
**Question:**
Calculate Period and Yearly TWR and MWR. [9]

**Full Model Solution:**
*   **TWR Logic:** Link the returns of sub-periods between cash flows.
*   **MWR Logic:** Find the $r$ such that $PV(\text{Inflows}) = PV(\text{Outflows})$.

---

### Question 89 | Exam Term: May 24 | Original Q.4
**Question:**
Caution in using P/B, Dividend payout, and P/E for undervaluation. [10]

**Full Model Solution:**
*   **Value Traps:** Low P/E might signal a company in permanent decline (obsolete tech).
*   **Accounting Quality:** P/B can be distorted by intangible assets or "Goodwill" write-downs.
*   **Dividend Sustainability:** High payout may be funded by debt, which is unsustainable and leads to future crashes.

---

### Question 90 | Exam Term: May 24 | Original Q.6
**Question:**
i) What is an Arbitrage fund? (2)
ii) Pros/Cons. (4)

**Full Model Solution:**
*   **i) Arbitrage Fund:** A fund that simultaneously buys in the cash market and sells in the futures market to capture the "Spread" (Risk-free return).
*   **ii) Pros:** Low risk; tax-efficient (treated as equity fund returns in many jurisdictions). **Cons:** Returns are typically low (near cash-rates); sensitive to market turnover.

---

### Question 91 | Exam Term: May 24 | Original Q.9
**Question:**
Distinctive features of companies in the financial sector. [5]

**Full Model Solution:**
*   **High Gearing:** Banks operate with very high leverage.
*   **Regulatory Capital:** Restricted by Basel III / Solvency II.
*   **Opaque Balance Sheets:** Difficulty in valuing "Level 3" assets.
*   **Interest Rate Sensitivity:** Direct impact on Net Interest Margins (NIM).

---

### Question 92 | Exam Term: May 25 | Original Q.3
**Question:**
i) What is Information Ratio (IR)? (2)
ii) Why use IR for assessment, and why is it flawed? (8)
iii) Performance calculation and comment. (8)

**Full Model Solution:**
*   **ii) Use of IR:** Measures the "Efficiency" of active risk-taking. **Flaws:** Can be easily gamed by keeping tracking error extremely low; highly sensitive to the benchmark choice.

---

### Question 93 | Exam Term: May 25 | Original Q.6
**Question:**
i) What is a Commodity? (2)
ii) Institutional investment ways. (4)
iii) High returns vs. capital requirement discussion. (14)
iv) Reasons to avoid VC money. (5)

**Full Model Solution:**
*   **iii) Capital Requirement:** Commodities often have **No Correlation** with financial assets. Under RBC, adding a non-correlated asset *reduces* the overall "Diversification Benefit" requirement, thus potentially *lowering* total capital.
*   **iv) Avoiding VC:** 1. Retain total control. 2. Avoid "Growth at all costs" pressure. 3. Prevent dilution of equity.

---

### Question 94 | Exam Term: Nov 20 | Original Q.6
**Question:**
i) 5-year zero rate calculation. (4)
ii) 3-year par yield calculation. (2)
iii) FRA value. (3)

**Full Model Solution:**
*   **i) Bootstrapping:** Use the coupon bonds to extract the zero-curve. $Price = \sum CF_t e^{-z_t t}$.

---

### Question 95 | Exam Term: Nov 20 | Original Q.7
**Question:**
Role of commodities in an Economy. [7]

**Full Model Solution:**
*   **Input to Production:** Energy/Metals drive industrial growth.
*   **Inflation Hedge:** Commodity prices typically rise when the currency devalues.
*   **Price Discovery:** Futures markets provide signals for farmers/miners to plan production levels.

---

### Question 96 | Exam Term: Sep 21 | Original Q.5
**Question:**
Fund Manager I vs II. Attribution and IR.
i) Overall performance, stock selection, sector selection. (10)
ii) Performance comment. (4)
iii) IR calculation for both. (5)
iv) Final recommendation. (2)

**Full Model Solution:**
*   **i) Attribution:** Even if Manager II has a higher total return, attribution might reveal it was all "Sector Luck" rather than "Stock Skill." IR will penalize high tracking error.

---

### Question 97 | Exam Term: Sep 21 | Original Q.6
**Question:**
Evaluating LDI for an inflation-linked annuity (Ages 50-55). [8]

**Full Model Solution:**
*   **LDI Suitability:** High. Inflation-linked bonds (ILBs) are the "Natural Hedge." **Challenges:** The term may be too long for available ILBs (longevity risk extension); low yield environment makes the product expensive.

---

### Question 98 | Supplementary SP5 Revision Question
**Question:**
Discuss the limitations of traditional Asset Liability Management (ALM) techniques.

**Full Model Solution:**
*   **Deterministic Fallacy:** Traditional models often use single point estimates for future returns.
*   **Linear Assumption:** Ignores the "Non-linear" nature of options and guarantees (Gamma/Vega risk).
*   **Liquidity Blindness:** Assumes assets can always be sold at market price; ignores "Haircuts" in a crisis.
*   **Management Over-reliance:** Assumes managers will follow the model exactly, ignoring psychological pressure to deviate during a crash.

---
**[END OF MASTER QUESTION BANK]**









