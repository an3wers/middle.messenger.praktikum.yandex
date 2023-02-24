import Block from '../../../core/block.ts'
import { Button } from '../../UI/Button/button.ts'
import { IconDelete } from '../../UI/Icons/20/Delete/iconDelete.ts'
import { IconEdit } from '../../UI/Icons/20/Edit/iconEdit.ts'
import { IconPlus } from '../../UI/Icons/20/Plus/iconPlus.ts'
import { IconMore } from '../../UI/Icons/24/More/iconMore.ts'
import template from './template.hbs'

interface ChatSelectedHeaderProps {
    name: string
}

export class ChatSelectedHeader extends Block {

    constructor(props: ChatSelectedHeaderProps) {
        super(props)
    }

    protected init(): void {
        this.children.MoreButton = new Button({
            icon: new IconMore({styles: 'btn-icon btn-icon_light'}),
            styles: 'btn btn_icon btn_light'
        })
        this.children.AddUserButton = new Button({
            styles: 'dropdown__item btn btn_small btn_link',
            label: 'Добавить пользователя',
            icon: new IconPlus({styles: 'btn-icon btn-icon_dark'})
        })
        this.children.EditChat = new Button({
            styles: 'dropdown__item btn btn_small btn_link',
            label: 'Редактировать чат',
            icon: new IconEdit({styles: 'btn-icon btn-icon_dark'})
        })
        this.children.RemoveChat = new Button({
            styles: 'dropdown__item btn btn_small btn_link btn_danger',
            label: 'Удалить чат',
            icon: new IconDelete({styles: 'btn-icon btn-icon_danger'})
        })
    }

  protected render(): DocumentFragment {
    return this.compile(template, this.props)
  }
}