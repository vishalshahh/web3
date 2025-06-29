"use client"
export function MissionSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-muted-foreground">
              Democratizing access to Web3 technology and empowering the next generation of builders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Building the Decentralized Future</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We believe that Web3 technology has the power to create a more open, transparent, and equitable digital
                world. Our platform serves as a bridge between traditional development and the decentralized ecosystem,
                providing developers with the tools, knowledge, and community they need to succeed.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through hackathons, educational resources, and collaborative projects, we're fostering innovation and
                helping to shape the future of the internet. Join us in building a decentralized world where everyone
                has the opportunity to participate and benefit.
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">🚀 Innovation</h4>
                  <p className="text-sm text-muted-foreground">
                    Pushing the boundaries of what's possible with blockchain technology
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🤝 Collaboration</h4>
                  <p className="text-sm text-muted-foreground">
                    Bringing together developers from around the world to build amazing things
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">📚 Education</h4>
                  <p className="text-sm text-muted-foreground">
                    Providing comprehensive learning resources for all skill levels
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🌍 Accessibility</h4>
                  <p className="text-sm text-muted-foreground">
                    Making Web3 technology accessible to developers everywhere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
