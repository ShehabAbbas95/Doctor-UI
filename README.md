# HealthConnect - Doctor Appointment Booking System

HealthConnect is a modern, responsive web application that allows patients to easily find and book appointments with medical specialists. Built with Next.js, TypeScript, and Tailwind CSS, it provides a seamless booking experience with a focus on accessibility and user experience.

## Features

- **Doctor Directory**

  - Browse through a curated list of medical specialists
  - Filter doctors by specialty and availability
  - View detailed doctor profiles including ratings and reviews
  - Responsive card layout optimized for all devices

- **Appointment Booking**

  - Interactive calendar for date selection
  - Real-time availability checking
  - Time slot selection with visual feedback
  - Instant booking confirmation

- **Appointment Management**

  - View all upcoming appointments
  - Cancel appointments with one click
  - Chronological sorting of appointments
  - Detailed appointment information display

- **User Interface**
  - Clean, medical-themed design
  - Fully responsive layout
  - Dark mode support
  - Accessible to keyboard users and screen readers

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm 9.0 or later

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/healthconnect.git
   ```

2. Navigate to the project directory:

   ```bash
   cd healthconnect
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

Build the application:

```bash
npm run build
```

### Running Production Build

Start the production server:

```bash
npm start
```

## Technology Stack

- **Framework**: Next.js 13 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Theme**: next-themes

## Project Structure

```
healthconnect/
├── app/                    # Next.js app directory
├── components/
│   ├── appointments/      # Appointment related components
│   ├── booking/          # Booking modal and time selection
│   ├── doctor-directory/ # Doctor listing and filtering
│   └── ui/              # Reusable UI components
├── lib/
│   ├── mock-data.ts     # Mock data for doctors
│   ├── types.ts         # TypeScript interfaces and types
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## Accessibility Features

- Proper heading hierarchy
- ARIA labels and descriptions
- Keyboard navigation support
- High contrast color schemes
- Screen reader friendly content
- Focus management in modals

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
