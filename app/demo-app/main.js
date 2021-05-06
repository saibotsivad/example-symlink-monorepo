import { upper } from '@/shared/util/strings.js'
import { lower } from '@/lib/util/strings.js'
import { excite } from '@/shared/strings.js'
import { sadden} from '@/lib/strings.js'
import { uid } from 'uid'

console.log(upper(uid()))
console.log(lower(upper(uid())))
console.log(excite(uid()))
console.log(sadden(uid()))
