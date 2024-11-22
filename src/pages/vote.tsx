import { useState } from 'react'

export default function Vote(): JSX.Element { // 这个返回值 以及函数名需要大写
  const [support, setSupport] = useState(0)
  const [deny, setDeny] = useState(0)
  const sum = support + deny
  return (
    // flex 居中文本 需要justify-center
    // flex-1 占据剩余空间
    // border-radius 使用rounded
    <>
      <div id="vote-box" h-500 w-full>
        <div id="vote-main" flex="~" gap-1 justify-center border-base rounded-md>
          Number of supporters:
          {' '}
          <span text-blue>{support}</span>
          Number of opponents:
          {' '}
          <span text-red>{deny}</span>
          Total number of votes:
          <span text-pink>{sum}</span>
        </div>
        <div id="vote-footer" text-emerald flex="~" gap-2 mt-5>
          <button id="left" border-base onClick={() => setSupport(v => v + 1)}>支持</button>
          <div flex-1></div>
          <button border-base id="right" onClick={() => setDeny(v => v + 1)}>反对</button>
        </div>
      </div>
    </>
  )
}
