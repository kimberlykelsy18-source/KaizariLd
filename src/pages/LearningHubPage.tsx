import { Button } from '../components/ui/button';

export function LearningHubPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-3xl text-center p-8">
        <h1 className="text-4xl font-bold text-[#005a7c] mb-4">Learning Hub</h1>
        <p className="text-lg text-gray-700 mb-6">
          Access our online courses and LMS at:
        </p>
        <a
          href="https://lms.kaizarildinternational.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-[#f57c00] text-white px-6 py-3">
            Go to LMS &rsaquo;
          </Button>
        </a>
        <p className="text-sm text-gray-600 mt-4">You will be redirected to our learning platform where you can enroll in self-paced and instructor-led courses.</p>
      </div>
    </div>
  );
}
