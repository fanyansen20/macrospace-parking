import { addNumber } from "@macrospace-parking/sample-lib"
import { Injectable } from "@nestjs/common"

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World! " + addNumber(1, 2)
  }
}
