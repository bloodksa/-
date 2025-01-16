import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BotIcon, SendIcon, RocketIcon, ShieldIcon, ZapIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-8 animate-fade-in-down">بوت صانع البوتات</h1>
        <p className="text-2xl text-center mb-12 animate-fade-in-up">أنشئ بوتات تلجرام خاصة بك بسهولة وسرعة!</p>
        
        <div className="flex justify-center mb-16 animate-bounce">
          <Link href="https://t.me/YourBotUsername" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-lg bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105">
              <BotIcon className="mr-2 h-6 w-6" /> ابدأ باستخدام البوت
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard icon={RocketIcon} title="سريع وسهل" description="أنشئ بوتك في دقائق معدودة" />
          <FeatureCard icon={ShieldIcon} title="آمن وموثوق" description="حماية كاملة لبياناتك وخصوصيتك" />
          <FeatureCard icon={ZapIcon} title="قوي ومرن" description="خيارات متعددة لتخصيص بوتك" />
        </div>

        <Card className="max-w-md mx-auto bg-white text-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl">تواصل معنا</CardTitle>
            <CardDescription>هل لديك أي استفسارات؟ راسلنا!</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input id="name" placeholder="الاسم" className="border-2 border-blue-200 focus:border-blue-500" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input id="email" placeholder="البريد الإلكتروني" className="border-2 border-blue-200 focus:border-blue-500" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Textarea id="message" placeholder="رسالتك" className="border-2 border-blue-200 focus:border-blue-500" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300">
              <SendIcon className="mr-2 h-4 w-4" /> إرسال
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <Card className="bg-white/10 backdrop-blur-lg text-white border-none hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
      <CardHeader>
        <Icon className="w-12 h-12 mb-4" />
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-200">{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

