/* Summary: The blank component contains the following two parts:
- To the left: There is an empty div with text on top and bottom.
- To the right: There is an empty div.

If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div` and then use the following syntax:
<div class="grid">
    <!-- these components appear to the left side -->
    <div id="left-side-container" class="flex"> Left side part here </div>

    <!-- these components appear to the right side -->
    <div id="right-side-container" class="flex"> Right side part here</div>
</div>
*/
Vue.component("blank_component_1724180203", {
    template: `
        <section class="bg-purple-900 text-white p-8 space-y-8">
    <div class="max-w-lg mx-auto">
        <h1 class="text-3xl font-bold mb-6 text-center">Aave Contract Interaction</h1>
        
        <!-- Deposit Section -->
        <div class="bg-purple-800 p-6 rounded-lg shadow-lg">
            <h2 class="text-xl font-semibold mb-4">Deposit</h2>
            <form>
                <div class="mb-4">
                    <label for="depositAsset" class="block text-sm font-medium">Asset Address</label>
                    <input type="text" id="depositAsset" class="w-full p-2 rounded bg-purple-700 border border-purple-600 focus:outline-none" placeholder="ETH: 0x..., USDC: 0x..., DAI: 0x...">
                </div>
                <div class="mb-4">
                    <label for="depositAmount" class="block text-sm font-medium">Amount</label>
                    <input type="number" id="depositAmount" class="w-full p-2 rounded bg-purple-700 border border-purple-600 focus:outline-none" placeholder="Enter amount">
                </div>
                <div class="mb-4">
                    <label for="onBehalfOf" class="block text-sm font-medium">On Behalf Of</label>
                    <input type="text" id="onBehalfOf" class="w-full p-2 rounded bg-purple-700 border border-purple-600 focus:outline-none" placeholder="Enter address">
                </div>
                <button type="submit" class="w-full p-2 rounded bg-purple-600 hover:bg-purple-500">Deposit</button>
            </form>
        </div>

        <!-- Withdraw Section -->
        <div class="bg-purple-800 p-6 rounded-lg shadow-lg">
            <h2 class="text-xl font-semibold mb-4">Withdraw</h2>
            <form>
                <div class="mb-4">
                    <label for="withdrawAsset" class="block text-sm font-medium">Asset Address</label>
                    <input type="text" id="withdrawAsset" class="w-full p-2 rounded bg-purple-700 border border-purple-600 focus:outline-none" placeholder="ETH: 0x..., USDC: 0x..., DAI: 0x...">
                </div>
                <div class="mb-4">
                    <label for="withdrawAmount" class="block text-sm font-medium">Amount</label>
                    <input type="number" id="withdrawAmount" class="w-full p-2 rounded bg-purple-700 border border-purple-600 focus:outline-none" placeholder="Enter amount">
                </div>
                <button type="submit" class="w-full p-2 rounded bg-purple-600 hover:bg-purple-500">Withdraw</button>
            </form>
        </div>

        <!-- Borrow Section -->
        <div class="bg-purple-800 p-6 rounded-lg shadow-lg">
            <h2 class="text-xl font-semibold mb-4">Borrow</h2>
            <form>
                <div class="mb-4">
                    <label for="borrowAsset" class="block text-sm font-medium">Asset Address</label>
                    <input type="text" id="borrowAsset" class="w-full p-2 rounded bg-purple-700 border border-purple-600 focus:outline-none" placeholder="ETH: 0x..., USDC: 0x..., DAI: 0x...">
                </div>
                <div class="mb-4">
                    <label for="borrowAmount" class="block text-sm font-medium">Amount</label>
                    <input type="number" id="borrowAmount" class="w-full p-2 rounded bg-purple-700 border border-purple-600 focus:outline-none" placeholder="Enter amount">
                </div>
                <div class="mb-4">
                    <label for="interestRateMode" class="block text-sm font-medium">Interest Rate Mode</label>
                    <select id="interestRateMode" class="w-full p-2 rounded bg-purple-700 border border-purple-600 focus:outline-none">
                        <option value="1">Stable</option>
                        <option value="2">Variable</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label for="borrowOnBehalfOf" class="block text-sm font-medium">On Behalf Of</label>
                    <input type="text" id="borrowOnBehalfOf" class="w-full p-2 rounded bg-purple-700 border border-purple-600 focus:outline-none" placeholder="Enter address">
                </div>
                <button type="submit" class="w-full p-2 rounded bg-purple-600 hover:bg-purple-500">Borrow</button>
            </form>
        </div>

        <!-- Repay Section -->
        <div class="bg-purple-800 p-6 rounded-lg shadow-lg">
            <h2 class="text-xl font-semibold mb-4">Repay</h2>
            <form>
                <div class="mb-4">
                    <label for="repayAsset" class="block text-sm font-medium">Asset Address</label>
                    <input type="text" id="repayAsset" class="w-full p-2 rounded bg-purple-700 border border-purple-600 focus:outline-none" placeholder="ETH: 0x..., USDC: 0x..., DAI: 0x...">

    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
