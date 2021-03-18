class ContactsController < ApplicationController
  require 'mail_form'
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      # flash.now[:notice] = 'Thank you for your message. I will contact pretty you soon!'
      # redirect_to new_contact_path, alert: "BRILLIANT!, " + "" + " I will contact you pretty soon, thank you."
      # render json: {message: "Email sent successfully"}
      flash.now[:error] = nil
      redirect_to root_path, notice: 'Gracias, tu mensaje se ha enviado'
    else
      flash.now[:error] = 'Hay un problema, nos puedes mandar un mail o un mensaje porfavor?'
      render :new
      #redirect_to new_contact_path, alert: 'Oops! something is wrong, can you please send me an email instead?, please'
    end
  end
end
