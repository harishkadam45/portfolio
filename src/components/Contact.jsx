const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Contact Me</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Email */}
          <div className="flex items-center gap-4 p-4 bg-white shadow rounded-xl">
            <span className="text-2xl">📧</span>
            <div className="text-left">
              <p className="font-semibold">Email</p>
              <a
                href="mailto:Kadamharish450@email.com"
                className="text-blue-600 hover:underline"
              >
                Kadamharish450@email.com
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4 p-4 bg-white shadow rounded-xl">
            <span className="text-2xl">💻</span>
            <div className="text-left">
              <p className="font-semibold">GitHub</p>
              <a
                href="https://github.com/harishkadam45"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/harishkadam45
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4 p-4 bg-white shadow rounded-xl">
            <span className="text-2xl">🔗</span>
            <div className="text-left">
              <p className="font-semibold">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/harish-kadam-0b7b66220/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/harish-kadam
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 p-4 bg-white shadow rounded-xl">
            <span className="text-2xl">📱</span>
            <div className="text-left">
              <p className="font-semibold">Phone</p>
              <a
                href="tel:+918208720039"
                className="text-blue-600 hover:underline"
              >
                +91 8208720039
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
