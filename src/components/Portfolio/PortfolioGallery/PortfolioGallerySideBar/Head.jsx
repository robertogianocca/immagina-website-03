import ArrowButton from "@/components/Buttons/ArrowButton";

export default function Head({ title, shortDescription, toggleTextBox }) {
  return (
    <div className="border-t-4 border-red-600">
      <div className="text-lg font-bold font-courier pt-1 pb-2">
        <h1>{title}</h1>
      </div>
      <div className="text-xs pb-4">{shortDescription}</div>
      <ArrowButton onClick={toggleTextBox} addClass="p-1 px-2 text-xs bg-custom-white">
        {"Read more"}
      </ArrowButton>
    </div>
  );
}
