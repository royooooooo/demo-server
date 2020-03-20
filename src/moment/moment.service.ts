import { Injectable, NotFoundException } from '@nestjs/common';
import IMomentsRequest from 'src/reqeusts/MomentsRequest';

interface IMoment {
    id: string;
    created_at: string;
    text: string;
    pic_url: string;
}

@Injectable()
export class MomentService {
    moments: IMoment[] = [
        {
            id: "4456602943754718",
            "created_at": "Fri Jan 03 11:00:04 +0800 2020",
            text: "#小编说书#【《共有的习惯：18世纪英国的平民文化》历史再次照进现实】粮食骚乱中的民众为何守纪节制，很少趁火打劫？卖妻交易中的女方为何轻松得意，甚至非常开心？喧闹游行中的队列为何只是象征性羞辱，却无实质性伤害？光怪陆离的民众行为到底如何解读？\n18世纪的英国，父权衰落，法度废弛，社会急... http://m.weibo.cn/client/version",
            "pic_url": "https://wx1.sinaimg.cn/wap180/5a3ccd6bly1gaio237bp9j20ly0tjdnq.jpg"
        },
        {
            id: "4456600679034207",
            "created_at": "Fri Jan 03 10:51:04 +0800 2020",
            text: "#寂静之地2#曝光新剧照！上一部被爸爸捂嘴，这一次#诺亚·尤佩#被妈妈#Emily Blunt#捂嘴~~[允悲][亲亲][酷] ​​​",
            "pic_url": "https://wx4.sinaimg.cn/wap180/4aff7849ly1gaj6mj2br8j20p00gokha.jpg"
        }]

    getMoments(request: IMomentsRequest) {
        return this.moments.slice(0, request.size || 2);
    }

    getMomentById(id: string): IMoment | undefined {
        const result = this.moments.filter(moment => moment.id === id);
        if (result.length !== 0) {
            return result[0]
        }
        throw new NotFoundException();
    }
}
