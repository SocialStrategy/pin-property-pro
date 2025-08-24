import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

// Blog content for the three main posts
const blogContent = {
  'furnished-vs-unfurnished-bangkok': {
    en: {
      title: 'Furnished vs. Unfurnished Condo in Bangkok: A Complete Cost Breakdown',
      content: `When searching for your perfect Bangkok condo, one of the biggest decisions you'll face is whether to go furnished or unfurnished. This choice impacts not just your upfront costs, but your entire living experience in the city.

**The Real Numbers: What You'll Actually Pay**

Let me break down the true costs based on current market rates:

**Furnished Condo (1BR in prime areas like Sukhumvit/Silom):**
- Rent: 35,000-50,000 THB/month
- Deposit: 2 months (70,000-100,000 THB)
- Utilities: ~3,500 THB/month
- **Total first month: 108,500-153,500 THB**

**Unfurnished Condo + Basic Furnishing:**
- Rent: 25,000-35,000 THB/month  
- Deposit: 2 months (50,000-70,000 THB)
- Basic furniture package: 80,000-120,000 THB
- Utilities: ~3,500 THB/month
- **Total first month: 158,500-228,500 THB**

**My Professional Recommendation**

For most expats, I recommend furnished condos for your first year in Bangkok. Here's why:

1. **Lower upfront investment** - You'll save 50,000-75,000 THB initially
2. **Flexibility** - Easier to relocate if the area doesn't suit you
3. **Quality guarantee** - Furnished units typically have better maintenance
4. **Stress-free move-in** - You can literally arrive with just your suitcase

**When to Choose Unfurnished**

Consider unfurnished only if:
- You're planning to stay 2+ years in the same unit
- You have specific furniture preferences or needs
- You're bringing furniture from your home country
- You've found a significantly cheaper unfurnished option

**The Hidden Costs Nobody Talks About**

Unfurnished condos often come with surprise expenses:
- Internet installation: 3,000-5,000 THB
- Air conditioning service: 2,500 THB
- Basic kitchen appliances: 15,000-25,000 THB
- Curtains and window treatments: 8,000-15,000 THB

**My Final Advice**

Start furnished for your first year. This gives you time to explore different neighborhoods, understand your lifestyle needs, and make connections with local suppliers. If you decide to stay long-term, you can always transition to unfurnished later with better knowledge of the market.

**Ready to find your perfect furnished condo? Contact me for a curated list of properties that match your budget and lifestyle preferences.**`
    },
    th: {
      title: 'คอนโดครบเครื่อง vs ไม่ครบเครื่องในกรุงเทพฯ: วิเคราะห์ต้นทุนแบบครบถ้วน',
      content: `เมื่อค้นหาคอนโดในฝันในกรุงเทพฯ หนึ่งในการตัดสินใจที่ใหญ่ที่สุดที่คุณจะต้องเผชิญคือการเลือกระหว่างครบเครื่องหรือไม่ครบเครื่อง ทางเลือกนี้ไม่เพียงส่งผลต่อค่าใช้จ่ายล่วงหน้าของคุณ แต่ยังส่งผลต่อประสบการณ์การใช้ชีวิทั้งหมดในเมืองนี้

**ตัวเลขจริง: สิ่งที่คุณจะต้องจ่ายจริงๆ**

ให้ฉันแบ่งต้นทุนที่แท้จริงตามอัตราตลาดปัจจุบัน:

**คอนโดครบเครื่อง (1 ห้องนอนในพื้นที่เฟ้นอย่างสุขุมวิท/สีลม):**
- ค่าเช่า: 35,000-50,000 บาท/เดือน
- เงินประกัน: 2 เดือน (70,000-100,000 บาท)
- ค่าสาธารณูปโภค: ~3,500 บาท/เดือน
- **รวมเดือนแรก: 108,500-153,500 บาท**

**คอนโดไม่ครบเครื่อง + เฟอร์นิเจอร์พื้นฐาน:**
- ค่าเช่า: 25,000-35,000 บาท/เดือน
- เงินประกัน: 2 เดือน (50,000-70,000 บาท)
- ชุดเฟอร์นิเจอร์พื้นฐาน: 80,000-120,000 บาท
- ค่าสาธารณูปโภค: ~3,500 บาท/เดือน
- **รวมเดือนแรก: 158,500-228,500 บาท**

**คำแนะนำจากมืออาชีพของฉัน**

สำหรับชาวต่างชาติส่วนใหญ่ ฉันแนะนำคอนโดครบเครื่องสำหรับปีแรกในกรุงเทพฯ เหตุผลมีดังนี้:

1. **การลงทุนล่วงหน้าต่ำกว่า** - คุณจะประหยัดได้ 50,000-75,000 บาทในตอนแรก
2. **ความยืดหยุ่น** - ย้ายได้ง่ายกว่าหากพื้นที่ไม่เหมาะกับคุณ
3. **รับประกันคุณภาพ** - ห้องครบเครื่องมักได้รับการบำรุงรักษาที่ดีกว่า
4. **ย้ายเข้าได้โดยไม่มีความเครียด** - คุณสามารถมาถึงพร้อมแค่กระเป๋าเดินทางได้

**เมื่อไหร่ควรเลือกไม่ครบเครื่อง**

พิจารณาไม่ครบเครื่องเฉพาะเมื่อ:
- คุณวางแผนที่จะอยู่ 2+ ปีในหน่วยเดียวกัน
- คุณมีความชอบหรือความต้องการเฟอร์นิเจอร์เฉพาะ
- คุณกำลังนำเฟอร์นิเจอร์มาจากประเทศบ้านเกิด
- คุณพบตัวเลือกไม่ครบเครื่องที่ถูกกว่าอย่างมีนัยสำคัญ

**ค่าใช้จ่ายที่ซ่อนอยู่ที่ไม่มีใครพูดถึง**

คอนโดไม่ครบเครื่องมักมาพร้อมกับค่าใช้จ่ายที่ไม่คาดคิด:
- การติดตั้งอินเทอร์เน็ต: 3,000-5,000 บาท
- บริการเครื่องปรับอากาศ: 2,500 บาท
- เครื่องใช้ไฟฟ้าในครัวพื้นฐาน: 15,000-25,000 บาท
- ผ้าม่านและการตกแต่งหน้าต่าง: 8,000-15,000 บาท

**คำแนะนำสุดท้ายของฉัน**

เริ่มต้นด้วยครบเครื่องสำหรับปีแรกของคุณ สิ่งนี้ให้เวลาคุณสำรวจย่านต่างๆ เข้าใจความต้องการไลฟ์สไตล์ของคุณ และสร้างการเชื่อมต่อกับซัพพลายเออร์ท้องถิ่น หากคุณตัดสินใจอยู่ระยะยาว คุณสามารถเปลี่ยนไปใช้ไม่ครบเครื่องในภายหลังด้วยความรู้ที่ดีขึ้นเกี่ยวกับตลาด

**พร้อมที่จะหาคอนโดครบเครื่องที่สมบูรณ์แบบแล้วหรือยัง? ติดต่อฉันเพื่อรับรายการอสังหาริมทรัพย์ที่คัดสรรแล้วซึ่งตรงกับงบประมาณและความชอบไลฟ์สไตล์ของคุณ**`
    }
  },
  'thai-rental-contract-guide': {
    en: {
      title: 'Thai Rental Contract Guide (Key Clauses Explained)',
      content: `Signing a rental contract in Thailand can feel overwhelming, especially when legal terminology is involved. As your trusted property advisor, I've reviewed hundreds of Thai rental contracts and want to share the key clauses you absolutely need to understand before signing.

**Essential Contract Elements**

Every legitimate Thai rental contract should include:

1. **Property Details**: Exact address, unit number, and floor
2. **Rental Period**: Start date, end date, and renewal terms
3. **Payment Terms**: Monthly rent, deposit amount, and due dates
4. **Utilities**: Who pays what (water, electricity, internet, cable)
5. **Maintenance Responsibilities**: Landlord vs tenant obligations

**Critical Clauses to Understand**

**1. Deposit and Payment Terms**
Standard practice: 2 months security deposit + 1 month advance rent
- "เงินประกัน" (Ngen Prakan) = Security Deposit
- "เงินค่าเช่าล่วงหน้า" (Ngen Ka Chao Lang Na) = Advance Rent

**2. Early Termination Clause**
This is crucial! Most contracts state:
- Breaking lease = forfeit entire security deposit
- Some allow early termination with 60-90 days notice + penalty
- Look for "การบอกเลิกสัญญาก่อนกำหนด" (Kan Bok Loek Sanya Gon Gamnot)

**3. Maintenance and Repairs**
Typically divided as:
- **Landlord**: Air conditioning, major appliances, structural issues
- **Tenant**: Daily cleaning, minor repairs, AC filter changes
- Key phrase: "ผู้เช่าต้องรับผิดชอบ" (Phu Chao Tong Rap Phit Chob) = Tenant responsible

**4. Utilities and Internet**
Common arrangements:
- Electricity: Usually tenant pays directly to MEA/PEA
- Water: Fixed rate (200-500 THB/month) or per unit
- Internet: Sometimes included, sometimes separate contract needed

**Red Flags to Watch For**

⚠️ **Avoid contracts with:**
- Excessive penalty clauses
- Vague maintenance responsibilities  
- No clear deposit return process
- Restrictions on guests or visitors
- Automatic renewal without notice periods

**Key Thai Terms to Know**

- สัญญาเช่า (Sanya Chao) = Rental Contract
- ผู้ให้เช่า (Phu Hai Chao) = Landlord
- ผู้เช่า (Phu Chao) = Tenant
- ค่าเช่า (Ka Chao) = Rent
- ค่าไฟฟ้า (Ka Fai Fa) = Electricity bill
- ค่าน้ำ (Ka Nam) = Water bill

**Before You Sign: My Checklist**

✅ Property condition documented with photos
✅ All appliances tested and working
✅ Deposit amount and return conditions clear
✅ Early termination terms understood
✅ Maintenance responsibilities defined
✅ Utility payment methods confirmed
✅ Contact information for landlord/management

**Professional Tip**

Never feel pressured to sign immediately. A legitimate landlord will give you time to review the contract. If something seems unclear, ask for clarification in writing.

**Need help reviewing a rental contract? I offer contract review services to ensure you're fully protected before signing. Contact me for a consultation.**`
    },
    th: {
      title: 'คู่มือสัญญาเช่าไทย (อธิบายข้อสำคัญ)',
      content: `การลงนามในสัญญาเช่าในประเทศไทยอาจรู้สึกหนักใจ โดยเฉพาะเมื่อมีศัพท์กฎหมายเข้ามาเกี่ยวข้อง ในฐานะที่ปรึกษาอสังหาริมทรัพย์ที่คุณไว้วางใจได้ ฉันได้ตรวจสอบสัญญาเช่าไทยหลายร้อยฉบับ และต้องการแบ่งปันข้อสำคัญที่คุณจำเป็นต้องเข้าใจอย่างแน่นอนก่อนลงนาม

**องค์ประกอบสำคัญของสัญญา**

สัญญาเช่าไทยที่ถูกต้องทุกฉบับควรรวม:

1. **รายละเอียดอสังหาริมทรัพย์**: ที่อยู่ที่แน่นอน หมายเลขห้อง และชั้น
2. **ระยะเวลาการเช่า**: วันเริ่มต้น วันสิ้นสุด และเงื่อนไขการต่ออายุ
3. **เงื่อนไขการชำระเงิน**: ค่าเช่ารายเดือน จำนวนเงินประกัน และวันครบกำหนด
4. **สาธารณูปโภค**: ใครจ่ายอะไร (น้ำ ไฟฟ้า อินเทอร์เน็ต เคเบิล)
5. **ความรับผิดชอบในการบำรุงรักษา**: ภาระหน้าที่ของเจ้าของ vs ผู้เช่า

**ข้อสำคัญที่ต้องเข้าใจ**

**1. เงินประกันและเงื่อนไขการชำระเงิน**
แนวปฏิบัติมาตรฐาน: เงินประกัน 2 เดือน + ค่าเช่าล่วงหน้า 1 เดือน
- "เงินประกัน" = เงินประกันความเสียหาย
- "เงินค่าเช่าล่วงหน้า" = ค่าเช่าที่จ่ายล่วงหน้า

**2. ข้อกำหนดการบอกเลิกก่อนกำหนด**
สิ่งนี้สำคัญมาก! สัญญาส่วนใหญ่ระบุว่า:
- การทำลายสัญญาเช่า = สูญเสียเงินประกันทั้งหมด
- บางฉบับอนุญาตให้บอกเลิกก่อนกำหนดด้วยการแจ้งล่วงหน้า 60-90 วัน + ค่าปรับ
- มองหา "การบอกเลิกสัญญาก่อนกำหนด"

**3. การบำรุงรักษาและการซ่อมแซม**
โดยทั่วไปแบ่งเป็น:
- **เจ้าของ**: เครื่องปรับอากาศ เครื่องใช้ไฟฟ้าใหญ่ ปัญหาโครงสร้าง
- **ผู้เช่า**: การทำความสะอาดประจำวัน การซ่อมแซมเล็กๆ การเปลี่ยนไส้กรองแอร์
- วลีสำคัญ: "ผู้เช่าต้องรับผิดชอบ"

**4. สาธารณูปโภคและอินเทอร์เน็ต**
การจัดการทั่วไป:
- ไฟฟ้า: โดยปกติผู้เช่าจ่ายโดยตรงกับ การไฟฟ้านครหลวง/การไฟฟ้าส่วนภูมิภาค
- น้ำ: อัตราคงที่ (200-500 บาท/เดือน) หรือต่อหน่วย
- อินเทอร์เน็ต: บางครั้งรวมอยู่ด้วย บางครั้งต้องทำสัญญาแยก

**สัญญาณเตือนที่ต้องระวัง**

⚠️ **หลีกเลี่ยงสัญญาที่มี:**
- ข้อกำหนดค่าปรับที่มากเกินไป
- ความรับผิดชอบในการบำรุงรักษาที่คลุมเครือ
- ไม่มีกระบวนการคืนเงินประกันที่ชัดเจน
- ข้อจำกัดเรื่องแขกหรือผู้มาเยือน
- การต่ออายุอัตโนมัติโดยไม่มีระยะเวลาแจ้งล่วงหน้า

**ศัพท์ไทยสำคัญที่ควรรู้**

- สัญญาเช่า = สัญญาการเช่า
- ผู้ให้เช่า = เจ้าของ
- ผู้เช่า = ผู้เช่า
- ค่าเช่า = ค่าเช่า
- ค่าไฟฟ้า = ค่าไฟฟ้า
- ค่าน้ำ = ค่าน้ำ

**ก่อนลงนาม: รายการตรวจสอบของฉัน**

✅ สภาพอสังหาริมทรัพย์บันทึกด้วยภาพถ่าย
✅ เครื่องใช้ไฟฟ้าทั้งหมดทดสอบและใช้งานได้
✅ จำนวนเงินประกันและเงื่อนไขการคืนชัดเจน
✅ เงื่อนไขการบอกเลิกก่อนกำหนดเข้าใจแล้ว
✅ ความรับผิดชอบในการบำรุงรักษากำหนดแล้ว
✅ วิธีการชำระค่าสาธารณูปโภคยืนยันแล้ว
✅ ข้อมูลติดต่อเจ้าของ/ผู้จัดการ

**เคล็ดลับจากมืออาชีพ**

อย่าให้ใครกดดันให้ลงนามทันที เจ้าของที่ถูกต้องจะให้เวลาคุณตรวจสอบสัญญา หากมีสิ่งใดดูไม่ชัดเจน ขอคำชี้แจงเป็นลายลักษณ์อักษร

**ต้องการความช่วยเหลือในการตรวจสอบสัญญาเช่าหรือไม่? ฉันให้บริการตรวจสอบสัญญาเพื่อให้แน่ใจว่าคุณได้รับการปกป้องอย่างเต็มที่ก่อนลงนาม ติดต่อฉันเพื่อปรึกษา**`
    }
  },
  'house-vs-condo-bangkok': {
    en: {
      title: 'Renting a House vs. a Condo in Bangkok: Which is Better for You?',
      content: `Choosing between a house and condo in Bangkok is one of the most important decisions for expats. Both options have distinct advantages, and the right choice depends on your lifestyle, budget, and long-term plans. Let me break down the real differences to help you decide.

**Houses in Bangkok: The Complete Picture**

**Pros:**
- **More Space**: Typically 150-300 sqm vs 35-80 sqm for condos
- **Privacy**: No shared walls, elevators, or common areas
- **Outdoor Space**: Garden, terrace, or parking area
- **Pet-Friendly**: Most houses allow pets without restrictions
- **Storage**: Ample space for belongings and larger furniture

**Cons:**
- **Higher Maintenance**: You're responsible for garden, exterior, repairs
- **Security Concerns**: Less secure than condo buildings
- **Limited Locations**: Mostly in suburbs, further from BTS/MRT
- **Utilities**: Often higher electricity bills due to size

**Typical House Costs:**
- Rent: 40,000-80,000 THB/month (depending on area)
- Utilities: 5,000-8,000 THB/month
- Maintenance: 3,000-5,000 THB/month

**Condos in Bangkok: The Urban Choice**

**Pros:**
- **Prime Locations**: Walking distance to BTS/MRT stations
- **Security**: 24/7 guards, key card access, CCTV
- **Amenities**: Pool, gym, concierge services
- **Low Maintenance**: Building handles exterior upkeep
- **Modern Features**: Latest appliances and fixtures

**Cons:**
- **Limited Space**: Compact living, minimal storage
- **Noise**: Shared walls, elevator sounds, neighbor noise
- **Pet Restrictions**: Many buildings have pet policies
- **Crowds**: Shared facilities can be busy during peak times

**Typical Condo Costs:**
- Rent: 25,000-60,000 THB/month (prime areas)
- Utilities: 3,000-5,000 THB/month
- Maintenance Fee: 50-150 THB/sqm/month

**My Professional Recommendations**

**Choose a House if you:**
- Have children or pets
- Work from home and need space/quiet
- Plan to stay 2+ years
- Prefer suburban lifestyle
- Have a car for transportation

**Choose a Condo if you:**
- Are single or couple without children
- Want to be in the city center
- Rely on public transportation
- Prefer low-maintenance living
- Value security and amenities

**Location Considerations**

**Best Areas for Houses:**
- **Thonglor/Ekkamai**: Upscale, family-friendly
- **Sathorn**: Mix of houses and condos, good schools
- **Sukhumvit 31-71**: Quieter residential streets
- **Ploenchit**: Premium location, larger properties

**Best Areas for Condos:**
- **Asoke/Nana**: Business district, excellent connectivity
- **Silom**: Financial center, nightlife
- **Phrom Phong**: Shopping, restaurants, expat community
- **Ari**: Trendy area, great cafes and local culture

**The Hidden Costs**

**Houses:**
- Garden maintenance: 2,000-4,000 THB/month
- Security system: 1,500-3,000 THB/month
- Pest control: 500-1,000 THB/month

**Condos:**
- Parking fee: 1,000-2,500 THB/month
- Internet installation: 3,000-5,000 THB
- Storage unit: 1,000-2,000 THB/month (if needed)

**My Final Advice**

For most first-time expats in Bangkok, I recommend starting with a condo in a prime location. This gives you:
- Easy access to explore the city
- Lower upfront commitment
- Better understanding of different neighborhoods
- Time to decide if you want more space later

After 6-12 months, if you find you need more space or prefer a quieter lifestyle, you can transition to a house with better knowledge of the city.

**Ready to find your perfect home in Bangkok? I'll help you weigh the pros and cons based on your specific situation and show you the best options in your preferred areas.**`
    },
    th: {
      title: 'เช่าบ้าน vs คอนโดในกรุงเทพฯ: อะไรดีกว่าสำหรับคุณ?',
      content: `การเลือกระหว่างบ้านและคอนโดในกรุงเทพฯ เป็นหนึ่งในการตัดสินใจที่สำคัญที่สุดสำหรับชาวต่างชาติ ทั้งสองตัวเลือกมีข้อดีที่แตกต่างกัน และการเลือกที่ถูกต้องขึ้นอยู่กับไลฟ์สไตล์ งบประมาณ และแผนระยะยาวของคุณ ให้ฉันแจกแจงความแตกต่างที่แท้จริงเพื่อช่วยคุณตัดสินใจ

**บ้านในกรุงเทพฯ: ภาพรวมที่สมบูรณ์**

**ข้อดี:**
- **พื้นที่มากกว่า**: โดยทั่วไป 150-300 ตร.ม. เทียบกับ 35-80 ตร.ม. สำหรับคอนโด
- **ความเป็นส่วนตัว**: ไม่มีกำแพงร่วม ลิฟต์ หรือพื้นที่ส่วนกลาง
- **พื้นที่กลางแจ้ง**: สวน ระเบียง หรือที่จอดรถ
- **เป็นมิตรกับสัตว์เลี้ยง**: บ้านส่วนใหญ่อนุญาตให้เลี้ยงสัตว์โดยไม่มีข้อจำกัด
- **พื้นที่เก็บของ**: พื้นที่เพียงพอสำหรับของใช้และเฟอร์นิเจอร์ขนาดใหญ่

**ข้อเสีย:**
- **การบำรุงรักษาสูงกว่า**: คุณรับผิดชอบสวน ภายนอก การซ่อมแซม
- **ความกังวลด้านความปลอดภัย**: ปลอดภัยน้อยกว่าอาคารคอนโด
- **ตำแหน่งที่จำกัด**: ส่วนใหญ่ในชานเมือง ห่างจาก BTS/MRT
- **สาธารณูปโภค**: มักมีค่าไฟฟ้าสูงกว่าเนื่องจากขนาด

**ค่าใช้จ่ายบ้านทั่วไป:**
- ค่าเช่า: 40,000-80,000 บาท/เดือน (ขึ้นอยู่กับพื้นที่)
- ค่าสาธารณูปโภค: 5,000-8,000 บาท/เดือน
- ค่าบำรุงรักษา: 3,000-5,000 บาท/เดือน

**คอนโดในกรุงเทพฯ: ตัวเลือกในเมือง**

**ข้อดี:**
- **ตำแหน่งเฟ้น**: ระยะเดินจากสถานี BTS/MRT
- **ความปลอดภัย**: ยาม 24/7 การเข้าถึงด้วยบัตรคีย์ กล้องวงจรปิด
- **สิ่งอำนวยความสะดวก**: สระว่ายน้ำ ยิม บริการคอนเซียร์จ
- **การบำรุงรักษาต่ำ**: อาคารจัดการการบำรุงรักษาภายนอก
- **คุณสมบัติทันสมัย**: เครื่องใช้ไฟฟ้าและอุปกรณ์ล่าสุด

**ข้อเสีย:**
- **พื้นที่จำกัด**: การใช้ชีวิตแบบกะทัดรัด พื้นที่เก็บของน้อย
- **เสียง**: กำแพงร่วม เสียงลิฟต์ เสียงเพื่อนบ้าน
- **ข้อจำกัดสัตว์เลี้ยง**: อาคารหลายแห่งมีนโยบายสัตว์เลี้ยง
- **ความแออัด**: สิ่งอำนวยความสะดวกที่ใช้ร่วมกันอาจแออัดในช่วงเวลาเร่งด่วน

**ค่าใช้จ่ายคอนโดทั่วไป:**
- ค่าเช่า: 25,000-60,000 บาท/เดือน (พื้นที่เฟ้น)
- ค่าสาธารณูปโภค: 3,000-5,000 บาท/เดือน
- ค่าบำรุงรักษา: 50-150 บาท/ตร.ม./เดือน

**คำแนะนำจากมืออาชีพของฉัน**

**เลือกบ้านหาก:**
- มีลูกหรือสัตว์เลี้ยง
- ทำงานจากบ้านและต้องการพื้นที่/ความเงียบ
- วางแผนอยู่ 2+ ปี
- ชอบไลฟ์สไตล์ชานเมือง
- มีรถสำหรับการเดินทาง

**เลือกคอนโดหาก:**
- เป็นโสดหรือคู่รักที่ไม่มีลูก
- ต้องการอยู่ในใจกลางเมือง
- พึ่งพาการขนส่งสาธารณะ
- ชอบการใช้ชีวิตที่บำรุงรักษาต่ำ
- ให้ความสำคัญกับความปลอดภัยและสิ่งอำนวยความสะดวก

**การพิจารณาตำแหน่ง**

**พื้นที่ที่ดีที่สุดสำหรับบ้าน:**
- **ทองหล่อ/เอกมัย**: หรูหรา เป็นมิตรกับครอบครัว
- **สาทร**: ผสมผสานบ้านและคอนโด โรงเรียนดี
- **สุขุมวิท 31-71**: ถนนที่อยู่อาศัยที่เงียบกว่า
- **เพลินจิต**: ตำแหน่งพรีเมียม อสังหาริมทรัพย์ขนาดใหญ่

**พื้นที่ที่ดีที่สุดสำหรับคอนโด:**
- **อโศก/นานา**: ย่านธุรกิจ การเชื่อมต่อที่ยอดเยี่ยม
- **สีลม**: ศูนย์การเงิน สถานบันเทิงยามค่ำคืน
- **พร้อมพงษ์**: ช็อปปิ้ง ร้านอาหา ชุมชนชาวต่างชาติ
- **อารีย์**: พื้นที่ที่ทันสมัย คาเฟ่และวัฒนธรรมท้องถิ่นที่ยอดเยี่ยม

**ค่าใช้จ่ายที่ซ่อนอยู่**

**บ้าน:**
- การบำรุงรักษาสวน: 2,000-4,000 บาท/เดือน
- ระบบรักษาความปลอดภัย: 1,500-3,000 บาท/เดือน
- การควบคุมศัตรูพืช: 500-1,000 บาท/เดือน

**คอนโด:**
- ค่าที่จอดรถ: 1,000-2,500 บาท/เดือน
- การติดตั้งอินเทอร์เน็ต: 3,000-5,000 บาท
- ห้องเก็บของ: 1,000-2,000 บาท/เดือน (หากต้องการ)

**คำแนะนำสุดท้ายของฉัน**

สำหรับชาวต่างชาติครั้งแรกในกรุงเทพฯ ส่วนใหญ่ ฉันแนะนำให้เริ่มต้นด้วยคอนโดในตำแหน่งเฟ้น สิ่งนี้ให้คุณ:
- การเข้าถึงที่ง่ายในการสำรวจเมือง
- ความมุ่งมั่นล่วงหน้าที่ต่ำกว่า
- ความเข้าใจที่ดีขึ้นเกี่ยวกับย่านต่างๆ
- เวลาในการตัดสินใจว่าต้องการพื้นที่มากขึ้นในภายหลังหรือไม่

หลังจาก 6-12 เดือน หากคุณพบว่าต้องการพื้นที่มากขึ้นหรือชอบไลฟ์สไตล์ที่เงียบกว่า คุณสามารถเปลี่ยนไปใช้บ้านด้วยความรู้ที่ดีขึ้นเกี่ยวกับเมือง

**พร้อมที่จะหาบ้านที่สมบูรณ์แบบในกรุงเทพฯ แล้วหรือยัง? ฉันจะช่วยคุณชั่งน้ำหนักข้อดีและข้อเสียตามสถานการณ์เฉพาะของคุณและแสดงตัวเลือกที่ดีที่สุดในพื้นที่ที่คุณต้องการ**`
    }
  }
}

export default function BlogPost() {
  const router = useRouter()
  const { slug, locale } = router.query
  
  const post = blogContent[slug]
  if (!post) {
    return <div>Post not found</div>
  }
  
  const content = post[locale] || post.en

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.content.substring(0, 160) + '...'} />
        <link rel="alternate" hrefLang="en" href={`https://pin-property-pro.vercel.app/en/blog/${slug}`} />
        <link rel="alternate" hrefLang="th" href={`https://pin-property-pro.vercel.app/th/blog/${slug}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://pin-property-pro.vercel.app/blog/${slug}`} />
      </Head>
      
      <div className="min-h-screen" style={{background: 'linear-gradient(to bottom, #F9F9DC, #F5F5D0)'}}>
        {/* Simple Navbar */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Pin Property Pro</span>
              </Link>
              
              <div className="flex items-center space-x-6">
                <Link href={`/${locale || 'en'}/blog`} className="text-red-600 font-semibold">
                  Blog
                </Link>
                <Link href={`/${locale || 'en'}/areas`} className="text-gray-700 hover:text-red-600">
                  Areas
                </Link>
                <Link href={`/${locale || 'en'}/contact`} className="text-gray-700 hover:text-red-600">
                  Contact
                </Link>
                
                {/* Language Toggle */}
                <div className="flex items-center gap-2">
                  <Link href={`/en/blog/${slug}`} className={`px-3 py-1 rounded ${locale === 'en' ? 'bg-red-600 text-white' : 'text-gray-700'}`}>
                    🇬🇧 EN
                  </Link>
                  <Link href={`/th/blog/${slug}`} className={`px-3 py-1 rounded ${locale === 'th' ? 'bg-red-600 text-white' : 'text-gray-700'}`}>
                    🇹🇭 TH
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link href={`/${locale || 'en'}/blog`} className="inline-flex items-center text-red-600 hover:text-red-700 mb-8">
            ← {locale === 'th' ? 'กลับไปที่บล็อก' : 'Back to Blog'}
          </Link>
          
          <article className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">{content.title}</h1>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              {content.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 last:mb-0">
                  {paragraph.split('**').map((part, i) => 
                    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                  )}
                </p>
              ))}
            </div>
          </article>
        </main>
        
        {/* Simple Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">© 2025 Pin Property Pro. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const slugs = Object.keys(blogContent)
  const paths = slugs.flatMap(slug => [
    { params: { slug }, locale: 'en' },
    { params: { slug }, locale: 'th' }
  ])
  
  return { paths, fallback: false }
}

export async function getStaticProps({ params, locale }) {
  return {
    props: {
      slug: params.slug,
      locale
    }
  }
}
