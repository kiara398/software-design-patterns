


//Observer(s): NewsSubscribers
interface NewsSubscriber
{
    receiveNews(news:object);
}
class Elite implements NewsSubscriber{
    receiveNews(news:object){
        console.log(news);
        
    }
}
class Ordinary implements NewsSubscriber{
    receiveNews(news:object){
        console.log(news);
        
    }
}

//Observable: NewsPublisher
class NewsPublisher
{
    private news:object; //State
    private subscribers: Array<NewsSubscriber> = []; //list of observers

    subscribe(subscriber:NewsSubscriber){
        this.subscribers.push(subscriber)

    }
    unsuscribe(subscriber:NewsSubscriber){

    }
    notifySubscribers(){
        for(let subscriber of this.subscribers){
            subscriber.receiveNews(this.news)

        }
    }
    publish(news:object){
        //triggring the notification mechanism
        this.news = news
        this.notifySubscribers()
    }
}

class NewVision extends NewsPublisher{}
class Bukedde extends NewsPublisher{}

let publisher:NewsPublisher = new NewVision();

let subscriber:NewsSubscriber = new Elite();
let subscriber1:NewsSubscriber = new Elite();
let subscriber2:NewsSubscriber = new Elite();
publisher.subscribe(subscriber)
publisher.subscribe(subscriber1)
publisher.subscribe(subscriber2)



publisher.publish({ 
    heading: "software developer turns into an actor",
    body: "Bob, a reknown........."
})

publisher.publish({ 
    heading: "Lockdown gets lifted",
    body: "Since December 2019, lockdown has made people go mad"
})

//publisher behaving polymoshic
publisher = new Bukedde()
let ordSubscriber = new Ordinary()
let ordSubscriber1 = new Ordinary()
let ordSubscriber2 = new Ordinary()
publisher.subscribe(ordSubscriber)
publisher.subscribe(ordSubscriber1)
publisher.subscribe(ordSubscriber2)

publisher.publish({ 
    omutwe: "Efujjo!!!!!!",
    ekinyusi: "Abasubunzi b'ewakisaka bekalakasinza"
})
publisher.publish({ 
    omutwe: "Ettemu!!!!!",
    ekinyusi: "Omukadde we Masaka ab......"
})

