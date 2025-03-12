export default function InventoryTitleCard() {
    return (
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-10 rounded-lg shadow-lg text-center">
            <div className="flex flex-col items-center space-y-2">
                <h1 className="text-4xl font-extrabold">Our Inventory</h1>
                <p className="text-lg text-gray-200">
                    Browse our selection of vehicles.
                </p>
            </div>
        </div>
    );
}