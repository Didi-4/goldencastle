

export default function location() {
  return (
    <div className="w-full h-full bg-background grid grid-cols-1 gap-4 md:grid-cols-2 gap-4 p-10">
        <div className="w-full shadow-lg shadow-black/50">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.4382827088043!2d6.815550473646799!3d6.071481728253822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043950042721211%3A0xd024cc4b2f7ba438!2sGolden%20Castle%20International%20School%20Oba!5e0!3m2!1sen!2sng!4v1776539818365!5m2!1sen!2sng" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="bg-secondary shadow-lg shadow-black/50">
            <form action="" className="grid grid-cols-1 gap-4 p-5 w-full h-full text-primary text-xl">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name"  className="border-1 outline-none p-2"/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" className="border-1 outline-none p-2" />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" className="border-1 outline-none p-2"></textarea>

                <button type="submit" className="bg-button cursor-pointer p-5 text-lg font-bold">Send Message</button>
            </form>
        </div>
    </div>
  )
}
