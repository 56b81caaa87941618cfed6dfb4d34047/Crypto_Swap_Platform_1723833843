/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1723833845", {
    template: `
   <section class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Lido Contract Interaction</h1>
    
    <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700">Enter ETH amount to deposit:</label>
        <input type="text" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter ETH amount">
    </div>

    <div class="flex items-center justify-between">
        <button class="bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit Deposit</button>
    </div>

    <div class="mt-8">
        <h2 class="text-xl font-bold mb-4">Contract Info</h2>
        <div class="grid grid-cols-2 gap-4">
            <div>
                <p class="text-sm font-medium text-gray-700">Buffered Ether:</p>
                <p class="text-lg font-semibold text-gray-900">0 ETH</p>
            </div>
            <div>
                <p class="text-sm font-medium text-gray-700">Total Pooled Ether:</p>
                <p class="text-lg font-semibold text-gray-900">0 ETH</p>
            </div>
            <div>
                <p class="text-sm font-medium text-gray-700">Validators Count:</p>
                <p class="text-lg font-semibold text-gray-900">0</p>
            </div>
            <div>
                <p class="text-sm font-medium text-gray-700">Staking Status:</p>
                <p class="text-lg font-semibold text-gray-900">Paused</p>
            </div>
        </div>
    </div>
</section>

        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
