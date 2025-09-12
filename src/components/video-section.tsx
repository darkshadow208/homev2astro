export function VideoSection() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/dQEdLQl1O5g?start=26&feature=oembed"
              title="Video de Quinceañera"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
