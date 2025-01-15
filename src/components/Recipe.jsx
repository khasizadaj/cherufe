import ReactMarkdown from "react-markdown";

export default function Recipe(props) {
  return (
    <section className="mt-16" aria-live="polite">
      <h2 className="text-3xl font-semibold text-orange-500">Recipe</h2>
      <div className="text-2xl space-y-2 mt-4">
        <ReactMarkdown
          components={{
            h2: (props) => <h2 className="text-2xl font-semibold my-4" {...props} />,
            h3: (props) => <h3 className="text-xl font-semibold my-2" {...props} />,
            p: (props) => <p className="text-xl" {...props} />,
            li: (props) => <li className="text-xl mb-1" {...props} />,
            ul: (props) => (
              <ul className="list-disc list-inside text-xl" {...props} />
            ),
            ol: (props) => (
              <ol className="list-decimal list-inside text-xl" {...props} />
            ),
            strong: (props) => <strong className="text-xl" {...props} />,
          }}
        >
          {props.recipe}
        </ReactMarkdown>
      </div>
    </section>
  );
}
