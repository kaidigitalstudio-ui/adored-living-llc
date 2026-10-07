export interface Letter {
  body: string[]
  by: string
  role: string
}

// Transcribed from handwritten cards sent to Colleen and Dominic.
// Light edits only: spelling, punctuation, and crossed-out words removed.
export const LETTERS: Letter[] = [
  {
    body: [
      'A simple thank you card could never express all the gratitude in our hearts for all you\'ve done for Don. Because of your caring, our Dad\'s final journey was filled with comfort and peace. You came into our lives during our most saddened moments and made us feel comfort and that our Dad was safe.',
      'We are forever grateful for your guidance and genuine love and warmth. Thank you for bringing your expertise and professional caregivers into our lives, and for your dedication in what you do. God bless you.',
    ],
    by: 'The Moore Family',
    role: 'family of a resident',
  },
  {
    body: [
      'How can I ever thank you for restoring me to good health? It\'s hard to find the words. I thought I was near the end when entering your special "home." But after 2 months I walked out of there to go home. At home I have been taking care of myself.',
      'Take care of yourselves. You all are a blessing.',
      'P.S. Many thanks to all you caring, sweet ladies.',
    ],
    by: 'Dorothy W.',
    role: 'former resident',
  },
  {
    body: [
      'The care, love and support you provided Miss Ruth in her final years is greatly appreciated. She thought of you and Harper as family, attending to all her needs with loving care.',
      'Our family will be forever grateful that we found Adored Living, and Miss Ruth was blessed to spend her final years in such loving care. We can\'t think of a better place, such attentive staff and wonderful caregivers to bless her final years!',
    ],
    by: 'The Carlson Family',
    role: 'family of a resident',
  },
  {
    body: [
      'Our family so appreciated everything you did for my mom. You guys saved us! We had no idea what to do. You did. Thank you.',
    ],
    by: 'Karen & Don',
    role: 'family of a resident',
  },
  {
    body: [
      'It\'s not an easy decision to move your mom into any care or assisted living facility. Clearly, Adored Living is different, because it was the exact right spot for Mom.',
      'Colleen, you are so warm and genuine. The way you made Mom feel when you interacted with her was amazing. In a career where you deal with so much sorrow, your spirit and positive enthusiasm made us all feel at ease that Mom was in caring hands. Thank you for keeping her warm, comfortable and loved.',
      'Dominic, bless you for believing in Colleen\'s vision and calling, and for all the meaningful contributions you add to make sure the home is so well maintained and clean, with a beautiful yard. Your kindness to your guests made it a home. God bless you both and your family.',
    ],
    by: 'A grateful family',
    role: 'family of a resident',
  },
  {
    body: [
      'You and Adored Living are the best thing that could\'ve happened to my mom. As much as she dreaded your visits, I loved them! She respected your knowledge and knew, reluctantly, that you were right regarding her care. I don\'t know where we would\'ve been these last 2 years without you! Keep doing what you do, you do it the best!',
    ],
    by: 'Lynne',
    role: 'daughter of a resident',
  },
  {
    body: [
      'I wanted you to know that your love and caring did not go unnoticed. Knowing my Dad\'s sensitivity to light, you took the time to install a dimmer switch and dimmable lights in his bedroom. Thank you for caring so much and completing the job so quickly.',
    ],
    by: 'The Moore Family',
    role: 'family of a resident',
  },
]

// Split letters into n columns of near-equal text length, keeping each column in list order.
// Exhaustive search is fine at this size (n^letters assignments).
function balance(letters: Letter[], n: number) {
  const weights = letters.map(l => l.body.join('').length + 260)
  let best: number[] = [], bestSpread = Infinity
  const assign: number[] = []
  const walk = (i: number, heights: number[]) => {
    if (i === letters.length) {
      const spread = Math.max(...heights) - Math.min(...heights)
      if (spread < bestSpread) { bestSpread = spread; best = [...assign] }
      return
    }
    for (let c = 0; c < n; c++) {
      if (i === 0 && c > 0) break
      assign[i] = c
      heights[c] += weights[i]
      walk(i + 1, heights)
      heights[c] -= weights[i]
    }
  }
  walk(0, new Array(n).fill(0))
  const cols: Letter[][] = Array.from({ length: n }, () => [])
  letters.forEach((l, i) => cols[best[i]].push(l))
  return cols
}

const COLUMNS = balance(LETTERS, 3)

export default function Testimonials() {
  return (
    <section className="section" id="letters">
      <div className="wrap">
        <div className="care-head reveal" style={{ marginBottom: 44 }}>
          <div>
            <span className="eyebrow">In their words</span>
            <h2>Letters from our families.</h2>
          </div>
          <p>Handwritten notes we've received from residents and their families.</p>
        </div>
        <div className="letters">
          {COLUMNS.map((col, c) => (
            <div className="letters-col" key={c}>
              {col.map((l, i) => (
                <figure className="letter reveal" key={i}>
                  <blockquote>
                    {l.body.map((para, j) => <p key={j}>{para}</p>)}
                  </blockquote>
                  <figcaption>{l.by} <em>— {l.role}</em></figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
