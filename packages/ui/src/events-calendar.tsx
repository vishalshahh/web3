"use client"
import { Card } from "./card"
import { Button } from "./button"
import { Badge } from "./badge"
import { Calendar, MapPin, Users, Clock, ExternalLink } from "lucide-react"

export function EventsCalendar() {
  const events = [
    {
      title: "Web3 Developer Conference 2024",
      date: "2024-02-20",
      time: "09:00 AM",
      endTime: "06:00 PM",
      location: "San Francisco, CA",
      venue: "Moscone Center",
      type: "Conference",
      attendees: 500,
      price: "$299",
      description:
        "Join leading Web3 developers and innovators for a day of learning, networking, and exploring the latest trends in decentralized technology.",
      image: "/placeholder.svg?height=200&width=400",
      organizer: "Web3 Foundation",
      speakers: ["Vitalik Buterin", "Gavin Wood", "Silvio Micali"],
    },
    {
      title: "DeFi Meetup: Future of Finance",
      date: "2024-02-25",
      time: "06:00 PM",
      endTime: "09:00 PM",
      location: "New York, NY",
      venue: "WeWork Wall Street",
      type: "Meetup",
      attendees: 150,
      price: "Free",
      description:
        "Explore the latest trends in decentralized finance with industry experts, featuring live demos and networking opportunities.",
      image: "/placeholder.svg?height=200&width=400",
      organizer: "DeFi NYC",
      speakers: ["Andre Cronje", "Stani Kulechov", "Kain Warwick"],
    },
    {
      title: "NFT Art Exhibition Opening",
      date: "2024-03-05",
      time: "07:00 PM",
      endTime: "11:00 PM",
      location: "Los Angeles, CA",
      venue: "LACMA Contemporary",
      type: "Exhibition",
      attendees: 200,
      price: "$50",
      description:
        "Discover groundbreaking digital art and meet the creators behind innovative NFT projects in this exclusive gallery opening.",
      image: "/placeholder.svg?height=200&width=400",
      organizer: "NFT LA",
      speakers: ["Pak", "XCOPY", "Refik Anadol"],
    },
    {
      title: "Blockchain Security Workshop",
      date: "2024-03-10",
      time: "10:00 AM",
      endTime: "04:00 PM",
      location: "Virtual Event",
      venue: "Online Platform",
      type: "Workshop",
      attendees: 300,
      price: "$99",
      description:
        "Learn best practices for securing smart contracts and blockchain applications with hands-on exercises and expert guidance.",
      image: "/placeholder.svg?height=200&width=400",
      organizer: "Security Alliance",
      speakers: ["Dan Guido", "Samczsun", "Trail of Bits Team"],
    },
    {
      title: "Web3 Gaming Summit",
      date: "2024-03-15",
      time: "09:00 AM",
      endTime: "05:00 PM",
      location: "Austin, TX",
      venue: "Austin Convention Center",
      type: "Summit",
      attendees: 800,
      price: "$199",
      description:
        "Explore the intersection of gaming and blockchain technology, featuring the latest in play-to-earn and NFT gaming.",
      image: "/placeholder.svg?height=200&width=400",
      organizer: "Blockchain Game Alliance",
      speakers: ["Robbie Ferguson", "Sebastien Borget", "Aleksander Larsen"],
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Conference":
        return "default"
      case "Meetup":
        return "secondary"
      case "Workshop":
        return "outline"
      case "Exhibition":
        return "destructive"
      case "Summit":
        return "default"
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <Card
          key={index}
          className="overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
        >
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <Badge variant={getTypeColor(event.type)}>{event.type}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{event.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Organized by <span className="font-medium">{event.organizer}</span>
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{event.price}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>
                    {event.time} - {event.endTime}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>{event.attendees} attending</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">Featured Speakers:</p>
                <div className="flex flex-wrap gap-2">
                  {event.speakers.map((speaker, speakerIndex) => (
                    <Badge key={speakerIndex} variant="outline" className="text-xs">
                      {speaker}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1 sm:flex-none">Register Now</Button>
                <Button variant="outline" className="flex-1 sm:flex-none bg-transparent">
                  Add to Calendar
                </Button>
                <Button variant="ghost" className="flex-1 sm:flex-none">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Details
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
