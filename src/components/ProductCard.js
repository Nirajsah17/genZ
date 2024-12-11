export default function ProductCard({
  index,
  name,
  description,
  pricePerUnit,
  unit,
  stockQuantity,
  totalQuantity,
  onDetail, 
  onUpdate
}) {
  return (
    <div class="flex w-full max-w-sm flex-col items-center justify-center rounded-lg border border-gray-300 bg-slate-800 p-6 text-white shadow-lg" id={index}>
      <div class="mb-2 text-xl font-bold">{name}</div>
      <div class="mb-4 text-sm">{description}</div>
      <div class="w-full space-y-2">
        <div class="flex justify-between text-sm">
          <span class="font-medium text-gray-500">Price Per Unit:</span>
          <span class="">{pricePerUnit}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="font-medium text-gray-500">Unit:</span>
          <span class="">{unit}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="font-medium text-gray-500">Stock Quantity:</span>
          <span class="">{stockQuantity}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="font-medium text-gray-500">Total Quantity:</span>
          <span class="">{totalQuantity}</span>
        </div>
      </div>
      <div class="mt-4 flex space-x-4">
        <button class="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700" onClick={()=>onUpdate(index)}>Update</button>
        <button class="rounded bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700" onClick={()=> onDetail(index)}>Details</button>
      </div>
    </div>
  );
}
