import React from 'react'
import { StarIcon } from 'lucide-react'
import { destinations } from '../utils/mockData'
const ReviewsPage = () => {
  // For demo purposes, we'll generate some mock reviews based on our destinations
  const reviews = destinations.map((destination) => ({
    id: destination.id,
    destinationName: destination.name,
    destinationImage: destination.image,
    rating: destination.rating,
    reviewCount: destination.reviewCount,
    // Mock review content
    recentReviews: [
      {
        id: `${destination.id}-1`,
        userName: 'John Doe',
        userImage:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        rating: 5,
        date: '2 days ago',
        comment: `Amazing experience at ${destination.name}! The location was perfect and everything exceeded our expectations.`,
      },
      {
        id: `${destination.id}-2`,
        userName: 'Jane Smith',
        userImage:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
        rating: 4,
        date: '1 week ago',
        comment: `Great destination! ${destination.name} offers beautiful scenery and lots of activities. Would recommend to others.`,
      },
    ],
  }))
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white text-center">
            Traveler Reviews
          </h1>
          <p className="mt-2 text-lg text-blue-100 text-center max-w-3xl mx-auto">
            Read authentic reviews from our community of travelers
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-10">
          {reviews.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={destination.destinationImage}
                    alt={destination.destinationName}
                    className="h-48 w-full md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {destination.destinationName}
                      </h2>
                      <div className="flex items-center mt-2">
                        <StarIcon className="h-5 w-5 text-yellow-500 fill-current" />
                        <span className="ml-1 text-gray-700">
                          {destination.rating}
                        </span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-gray-600">
                          {destination.reviewCount} reviews
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {destination.recentReviews.map((review) => (
                      <div key={review.id} className="border-t pt-6">
                        <div className="flex items-center mb-4">
                          <img
                            src={review.userImage}
                            alt={review.userName}
                            className="h-10 w-10 rounded-full"
                          />
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {review.userName}
                            </div>
                            <div className="text-gray-500 text-sm">
                              {review.date}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, index) => (
                            <StarIcon
                              key={index}
                              className={`h-4 w-4 ${index < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ReviewsPage
